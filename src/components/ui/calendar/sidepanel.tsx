"use client";
// components/SidePanel.tsx
import React from 'react';

interface EventDetails {
  title: string;
  date: string;
  time: string;
  description: React.ReactNode;
}

interface SidePanelProps {
  eventDetails: EventDetails | null;
  onClose: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ eventDetails, onClose }) => {
  if (!eventDetails) return null;

  return (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-4 z-10">
      <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold">
        &times;
      </button>
      <h2 className="text-xl font-bold mb-2">{eventDetails.title}</h2>
      <p className="mb-2">
        <strong>Date: </strong>{eventDetails.date}
      </p>
      <p className="mb-2">
        <strong>Time: </strong>{eventDetails.time}
      </p>
      <div>
        <strong>Description: </strong>
        <div>{eventDetails.description}</div>
      </div>
    </div>
  );
};

export default SidePanel;
