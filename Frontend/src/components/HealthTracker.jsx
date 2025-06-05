import React, { useState, useEffect, useRef } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const HealthTracker = () => {
  const [date, setDate] = useState(new Date());
  const [entry, setEntry] = useState({ mood: "", sleep: "", stress: "", energy: "" });
  const [journal, setJournal] = useState("");
  const [data, setData] = useState([]);
  const [hydrated, setHydrated] = useState(false);
  const [medTaken, setMedTaken] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState("");
  const pdfRef = useRef(null);

  const handleSubmit = () => {
    const newEntry = {
      ...entry,
      date: date.toLocaleDateString(),
      journal,
    };
    setData([...data, newEntry]);
    setEntry({ mood: "", sleep: "", stress: "", energy: "" });
    setJournal("");
  };

  useEffect(() => {
    if (data.length > 0) {
      const last = data[data.length - 1];
      let suggestion = "Keep it up! 😊";

      if (last.stress > 7) suggestion = "Try meditation or a calming walk.";
      else if (last.sleep < 5) suggestion = "You should get more rest.";
      else if (last.energy < 3) suggestion = "A balanced meal and hydration can help.";

      setAiSuggestions(suggestion);
    }
  }, [data]);

  const exportPDF = () => {
    html2canvas(pdfRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 190, 150);
      pdf.save("HealthReport.pdf");
    });
  };

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      setJournal(event.results[0][0].transcript);
    };
    recognition.start();
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen" ref={pdfRef}>
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Health Tracker</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <DatePicker selected={date} onChange={(date) => setDate(date)} className="p-2 border rounded" />

        <div>
          <label>Mood (1-10):</label>
          <input
            type="number"
            value={entry.mood}
            onChange={(e) => setEntry({ ...entry, mood: e.target.value })}
            className="p-2 w-full border rounded"
          />
        </div>

        <div>
          <label>Sleep (hours):</label>
          <input
            type="number"
            value={entry.sleep}
            onChange={(e) => setEntry({ ...entry, sleep: e.target.value })}
            className="p-2 w-full border rounded"
          />
        </div>

        <div>
          <label>Stress Level (1-10):</label>
          <input
            type="number"
            value={entry.stress}
            onChange={(e) => setEntry({ ...entry, stress: e.target.value })}
            className="p-2 w-full border rounded"
          />
        </div>

        <div>
          <label>Energy Level (1-10):</label>
          <input
            type="number"
            value={entry.energy}
            onChange={(e) => setEntry({ ...entry, energy: e.target.value })}
            className="p-2 w-full border rounded"
          />
        </div>
      </div>

      <div className="mb-4">
        <label>Journal Entry:</label>
        <textarea
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          rows="4"
          className="w-full p-3 border rounded"
        />
        <button onClick={handleVoiceInput} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Voice Input
        </button>
      </div>

      <div className="flex gap-4 my-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={hydrated} onChange={() => setHydrated(!hydrated)} />
          Hydration Reminder
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={medTaken} onChange={() => setMedTaken(!medTaken)} />
          Medication Taken
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Save Entry
      </button>

      <button
        onClick={exportPDF}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 ml-4"
      >
        Export to PDF
      </button>

      {aiSuggestions && (
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500">
          <p className="font-semibold text-blue-700">AI Suggestion:</p>
          <p>{aiSuggestions}</p>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Mood and Energy Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Line type="monotone" dataKey="mood" stroke="#8884d8" />
            <Line type="monotone" dataKey="energy" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HealthTracker;
