import { useState, useEffect } from "react";

const STATUS = {
  NOT_STARTED: { label: "Not Started", color: "#2a2a3e", text: "#6b7094", icon: "○" },
  IN_PROGRESS: { label: "In Progress", color: "#3d3520", text: "#f0c040", icon: "◐" },
  PASS: { label: "Pass", color: "#1a3328", text: "#4ade80", icon: "●" },
  FAIL: { label: "Fail", color: "#3b1c1c", text: "#f87171", icon: "✕" },
  BLOCKED: { label: "Blocked", color: "#2d2535", text: "#c084fc", icon: "⊘" },
};

const STATUS_ORDER = ["NOT_STARTED", "IN_PROGRESS", "PASS", "FAIL", "BLOCKED"];

const STAGES = [
  { key: "rtl_sim", label: "RTL Sim" },
  { key: "synthesis", label: "Synthesis" },
  { key: "pnr", label: "PNR" },
  { key: "post_pnr_sim", label: "Post-PNR Sim" },
  { key: "timing", label: "Timing" },
  { key: "drc_lvs", label: "DRC/LVS" },
];

const DEFAULT_MODULES = [
  { name: "nbody_top", notes: "Top-level N-body accelerator" },
  { name: "pe_array", notes: "Systolic PE array" },
  { name: "processing_element", notes: "Single PE unit" },
  { name: "force_lut", notes: "Force lookup table" },
  { name: "fp_adder", notes: "Fixed-point adder" },
  { name: "fp_multiplier", notes: "Fixed-point multiplier" },
  { name: "controller_fsm", notes: "Main FSM controller" },
  { name: "mem_interface", notes: "Memory interface" },
];

function StatusCell({ status, onClick }) {
  const s = STATUS[status];
  return (
    <button
      onClick={onClick}
      style={{
        background: s.color,
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "6px",
        padding: "6px 10px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        transition: "all 0.15s ease",
        minWidth: "110px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
        e.currentTarget.style.transform = "scale(1.03)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.transform = "scale(1)";
      }}
      title="Click to cycle status"
    >
      <span style={{ color: s.text, fontSize: "14px", lineHeight: 1 }}>{s.icon}</span>
      <span style={{ color: s.text, fontSize: "12px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
        {s.label}
      </span>
    </button>
  );
}

export default function VerificationTracker() {
  const [modules, setModules] = useState(() => {
    return DEFAULT_MODULES.map((m) => ({
      ...m,
      stages: Object.fromEntries(STAGES.map((s) => [s.key, "NOT_STARTED"])),
    }));
  });

  const [newModule, setNewModule] = useState("");
  const [newNote, setNewNote] = useState("");
  const [editingNote, setEditingNote] = useState(null);
  const [filter, setFilter] = useState("ALL");

  const cycleStatus = (modIdx, stageKey) => {
    setModules((prev) => {
      const next = [...prev];
      const cur = next[modIdx].stages[stageKey];
      const curIdx = STATUS_ORDER.indexOf(cur);
      next[modIdx] = {
        ...next[modIdx],
        stages: {
          ...next[modIdx].stages,
          [stageKey]: STATUS_ORDER[(curIdx + 1) % STATUS_ORDER.length],
        },
      };
      return next;
    });
  };

  const addModule = () => {
    if (!newModule.trim()) return;
    setModules((prev) => [
      ...prev,
      {
        name: newModule.trim(),
        notes: newNote.trim(),
        stages: Object.fromEntries(STAGES.map((s) => [s.key, "NOT_STARTED"])),
      },
    ]);
    setNewModule("");
    setNewNote("");
  };

  const removeModule = (idx) => {
    setModules((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateNote = (idx, note) => {
    setModules((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], notes: note };
      return next;
    });
    setEditingNote(null);
  };

  // Stats
  const totalCells = modules.length * STAGES.length;
  const statusCounts = {};
  STATUS_ORDER.forEach((s) => (statusCounts[s] = 0));
  modules.forEach((m) => STAGES.forEach((s) => statusCounts[m.stages[s.key]]++));

  const passRate = totalCells > 0 ? ((statusCounts.PASS / totalCells) * 100).toFixed(1) : 0;

  const filteredModules =
    filter === "ALL"
      ? modules
      : modules.filter((m) => Object.values(m.stages).some((s) => s === filter));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d14",
        color: "#e0e0f0",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        padding: "24px",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "4px" }}>
          <h1
            style={{
              fontSize: "22px",
              fontWeight: 700,
              fontFamily: "'JetBrains Mono', monospace",
              color: "#f0f0ff",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            VERIFICATION TRACKER
          </h1>
          <span style={{ fontSize: "12px", color: "#4a4a6a", fontFamily: "'JetBrains Mono', monospace" }}>
            RTL → GDSII
          </span>
        </div>
        <div
          style={{
            height: "2px",
            background: "linear-gradient(90deg, #4ade80 0%, #f0c040 40%, #f87171 70%, #c084fc 100%)",
            borderRadius: "1px",
            marginTop: "8px",
            opacity: 0.6,
          }}
        />
      </div>

      {/* Stats Bar */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#13132a",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "8px",
            padding: "12px 18px",
            flex: "1 1 140px",
            minWidth: "140px",
          }}
        >
          <div style={{ fontSize: "11px", color: "#6b7094", fontFamily: "'JetBrains Mono', monospace", marginBottom: "4px" }}>
            PROGRESS
          </div>
          <div style={{ fontSize: "28px", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: "#4ade80" }}>
            {passRate}%
          </div>
          <div
            style={{
              height: "4px",
              background: "#1a1a30",
              borderRadius: "2px",
              marginTop: "8px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${passRate}%`,
                background: "linear-gradient(90deg, #4ade80, #22d3ee)",
                borderRadius: "2px",
                transition: "width 0.4s ease",
              }}
            />
          </div>
        </div>

        {STATUS_ORDER.map((key) => (
          <button
            key={key}
            onClick={() => setFilter(filter === key ? "ALL" : key)}
            style={{
              background: filter === key ? STATUS[key].color : "#13132a",
              border: `1px solid ${filter === key ? STATUS[key].text + "44" : "rgba(255,255,255,0.06)"}`,
              borderRadius: "8px",
              padding: "12px 16px",
              cursor: "pointer",
              flex: "0 1 auto",
              minWidth: "90px",
              transition: "all 0.15s ease",
            }}
          >
            <div style={{ fontSize: "11px", color: "#6b7094", fontFamily: "'JetBrains Mono', monospace", marginBottom: "4px" }}>
              {STATUS[key].label.toUpperCase()}
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                color: STATUS[key].text,
              }}
            >
              {statusCounts[key]}
            </div>
          </button>
        ))}
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "16px",
          fontSize: "11px",
          color: "#6b7094",
          fontFamily: "'JetBrains Mono', monospace",
          flexWrap: "wrap",
        }}
      >
        <span>↑ Click status filter cards above</span>
        <span>↓ Click cells below to cycle status</span>
        {filter !== "ALL" && (
          <button
            onClick={() => setFilter("ALL")}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "none",
              color: "#e0e0f0",
              padding: "2px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "11px",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Clear filter ✕
          </button>
        )}
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto", marginBottom: "20px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0 4px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px 12px",
                  fontSize: "11px",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#6b7094",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  minWidth: "160px",
                }}
              >
                MODULE
              </th>
              {STAGES.map((s) => (
                <th
                  key={s.key}
                  style={{
                    textAlign: "center",
                    padding: "8px 10px",
                    fontSize: "11px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#6b7094",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  {s.label.toUpperCase()}
                </th>
              ))}
              <th
                style={{
                  textAlign: "left",
                  padding: "8px 12px",
                  fontSize: "11px",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#6b7094",
                  fontWeight: 600,
                  minWidth: "140px",
                }}
              >
                NOTES
              </th>
              <th style={{ width: "36px" }} />
            </tr>
          </thead>
          <tbody>
            {filteredModules.map((mod, idx) => {
              const realIdx = modules.indexOf(mod);
              return (
                <tr
                  key={realIdx}
                  style={{
                    background: "#111126",
                    borderRadius: "8px",
                  }}
                >
                  <td
                    style={{
                      padding: "10px 12px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#c8c8e8",
                      borderRadius: "8px 0 0 8px",
                    }}
                  >
                    {mod.name}
                  </td>
                  {STAGES.map((s) => (
                    <td key={s.key} style={{ padding: "6px 4px", textAlign: "center" }}>
                      <StatusCell
                        status={mod.stages[s.key]}
                        onClick={() => cycleStatus(realIdx, s.key)}
                      />
                    </td>
                  ))}
                  <td style={{ padding: "6px 12px" }}>
                    {editingNote === realIdx ? (
                      <input
                        autoFocus
                        defaultValue={mod.notes}
                        onBlur={(e) => updateNote(realIdx, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") updateNote(realIdx, e.target.value);
                          if (e.key === "Escape") setEditingNote(null);
                        }}
                        style={{
                          background: "#1a1a35",
                          border: "1px solid #4ade8055",
                          borderRadius: "4px",
                          color: "#e0e0f0",
                          padding: "4px 8px",
                          fontSize: "12px",
                          fontFamily: "'JetBrains Mono', monospace",
                          width: "100%",
                          outline: "none",
                        }}
                      />
                    ) : (
                      <span
                        onClick={() => setEditingNote(realIdx)}
                        style={{
                          fontSize: "12px",
                          color: mod.notes ? "#8888aa" : "#44445a",
                          fontFamily: "'JetBrains Mono', monospace",
                          cursor: "pointer",
                          fontStyle: mod.notes ? "normal" : "italic",
                        }}
                      >
                        {mod.notes || "click to add..."}
                      </span>
                    )}
                  </td>
                  <td style={{ padding: "6px 8px", borderRadius: "0 8px 8px 0" }}>
                    <button
                      onClick={() => removeModule(realIdx)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#44445a",
                        cursor: "pointer",
                        fontSize: "16px",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#f87171";
                        e.currentTarget.style.background = "rgba(248,113,113,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#44445a";
                        e.currentTarget.style.background = "none";
                      }}
                      title="Remove module"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Add Module */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          background: "#111126",
          borderRadius: "8px",
          padding: "10px 12px",
          border: "1px dashed rgba(255,255,255,0.08)",
        }}
      >
        <span style={{ color: "#4ade80", fontSize: "16px", marginRight: "4px" }}>+</span>
        <input
          value={newModule}
          onChange={(e) => setNewModule(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addModule()}
          placeholder="module_name"
          style={{
            background: "#0d0d14",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "6px",
            color: "#e0e0f0",
            padding: "8px 12px",
            fontSize: "13px",
            fontFamily: "'JetBrains Mono', monospace",
            flex: "1 1 200px",
            outline: "none",
          }}
        />
        <input
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addModule()}
          placeholder="notes (optional)"
          style={{
            background: "#0d0d14",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "6px",
            color: "#e0e0f0",
            padding: "8px 12px",
            fontSize: "13px",
            fontFamily: "'JetBrains Mono', monospace",
            flex: "1 1 200px",
            outline: "none",
          }}
        />
        <button
          onClick={addModule}
          style={{
            background: "#1a3328",
            border: "1px solid #4ade8033",
            borderRadius: "6px",
            color: "#4ade80",
            padding: "8px 16px",
            cursor: "pointer",
            fontSize: "13px",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            transition: "all 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#224438")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#1a3328")}
        >
          Add
        </button>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "20px",
          fontSize: "11px",
          color: "#44445a",
          fontFamily: "'JetBrains Mono', monospace",
          textAlign: "center",
        }}
      >
        {modules.length} modules · {totalCells} checkpoints · Click cells to cycle: Not Started → In Progress → Pass → Fail → Blocked
      </div>
    </div>
  );
}
