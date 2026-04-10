function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;
var STORAGE_KEY = "elen6350_tracker_v1";

// Firebase is loaded asynchronously inside the component so it never
// blocks the initial render. Config is safe to commit — security comes
// from Firestore rules, not from keeping these values secret.
var FIREBASE_CONFIG = {
  apiKey: "AIzaSyC7_2FWrQC6RUrZHMnqDYefwo_DNZTq4rU",
  authDomain: "my-page-99b69.firebaseapp.com",
  projectId: "my-page-99b69",
  storageBucket: "my-page-99b69.firebasestorage.app",
  messagingSenderId: "992670582379",
  appId: "1:992670582379:web:90b41297ff7a3bdcc4d32e"
};

/* Map status keys to CSS variable names */
var STATUS = {
  NOT_STARTED: {
    label: "Not started",
    icon: "—",
    bg: "var(--s-none-bg)",
    text: "var(--s-none-text)",
    border: "var(--s-none-border)"
  },
  IN_PROGRESS: {
    label: "In progress",
    icon: "◑",
    bg: "var(--s-prog-bg)",
    text: "var(--s-prog-text)",
    border: "var(--s-prog-border)"
  },
  PASS: {
    label: "Pass",
    icon: "✓",
    bg: "var(--s-pass-bg)",
    text: "var(--s-pass-text)",
    border: "var(--s-pass-border)"
  },
  FAIL: {
    label: "Fail",
    icon: "✕",
    bg: "var(--s-fail-bg)",
    text: "var(--s-fail-text)",
    border: "var(--s-fail-border)"
  },
  BLOCKED: {
    label: "Blocked",
    icon: "⊘",
    bg: "var(--s-block-bg)",
    text: "var(--s-block-text)",
    border: "var(--s-block-border)"
  }
};
var STATUS_ORDER = ["NOT_STARTED", "IN_PROGRESS", "PASS", "FAIL", "BLOCKED"];
var STAGES = [{
  key: "rtl_sim",
  label: "RTL Sim"
}, {
  key: "synthesis",
  label: "Synthesis"
}, {
  key: "pnr",
  label: "PNR"
}, {
  key: "post_pnr_sim",
  label: "Post-PNR Sim"
}, {
  key: "timing",
  label: "Timing"
}, {
  key: "drc_lvs",
  label: "DRC/LVS"
}];
var DEFAULT_MODULES = [{
  name: "nbody_top",
  notes: "Top-level N-body accelerator"
}, {
  name: "pe_array",
  notes: "Systolic PE array"
}, {
  name: "processing_element",
  notes: "Single PE unit"
}, {
  name: "force_lut",
  notes: "Force lookup table"
}, {
  name: "fp_adder",
  notes: "Fixed-point adder"
}, {
  name: "fp_multiplier",
  notes: "Fixed-point multiplier"
}, {
  name: "controller_fsm",
  notes: "Main FSM controller"
}, {
  name: "mem_interface",
  notes: "Memory interface"
}];
var cell = {
  padding: 0,
  margin: 0,
  fontFamily: "var(--tr-mono)",
  fontSize: "12px"
};
function StatusBadge(_ref) {
  var status = _ref.status,
    onClick = _ref.onClick;
  var s = STATUS[status];
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    hovered = _useState2[0],
    setHovered = _useState2[1];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: function onMouseEnter() {
      return setHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovered(false);
    },
    title: "Click to cycle",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      padding: "4px 10px",
      background: s.bg,
      color: s.text,
      border: "1px solid ".concat(s.border),
      borderRadius: "5px",
      cursor: "pointer",
      fontFamily: "var(--tr-mono)",
      fontSize: "12px",
      fontWeight: 500,
      whiteSpace: "nowrap",
      width: "100%",
      justifyContent: "center",
      opacity: hovered ? 0.8 : 1,
      transform: hovered ? "scale(1.02)" : "scale(1)",
      transition: "opacity 0.1s, transform 0.1s",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      lineHeight: 1
    }
  }, s.icon), s.label);
}
function StatCard(_ref2) {
  var label = _ref2.label,
    value = _ref2.value,
    color = _ref2.color,
    active = _ref2.active,
    onClick = _ref2.onClick;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hovered = _useState4[0],
    setHovered = _useState4[1];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: function onMouseEnter() {
      return setHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovered(false);
    },
    style: {
      background: active ? "var(--tr-surface)" : "var(--tr-bg)",
      border: "1px solid ".concat(active ? color : "var(--tr-border)"),
      borderRadius: "7px",
      padding: "12px 16px",
      cursor: "pointer",
      textAlign: "left",
      minWidth: "80px",
      flex: "0 1 auto",
      transition: "border-color 0.15s, box-shadow 0.15s",
      boxShadow: active || hovered ? "0 1px 6px rgba(0,0,0,0.08)" : "none",
      outline: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "10px",
      color: "var(--tr-muted)",
      fontFamily: "var(--tr-mono)",
      letterSpacing: "0.05em",
      marginBottom: "4px",
      textTransform: "uppercase"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "22px",
      fontWeight: 700,
      fontFamily: "var(--tr-mono)",
      color: active ? color : "var(--tr-text)"
    }
  }, value));
}

// ─── Sync status pill ────────────────────────────────────────────
var SYNC = {
  init: {
    label: "Connecting…",
    color: "var(--tr-muted)"
  },
  synced: {
    label: "Synced",
    color: "var(--s-pass-text)"
  },
  saving: {
    label: "Saving…",
    color: "var(--s-prog-text)"
  },
  error: {
    label: "Sync error",
    color: "var(--s-fail-text)"
  },
  local: {
    label: "Local only",
    color: "var(--s-block-text)"
  }
};
function SyncPill(_ref3) {
  var status = _ref3.status;
  var s = SYNC[status] || SYNC.local;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      fontFamily: "var(--tr-mono)",
      color: s.color,
      opacity: 0.85,
      border: "1px solid ".concat(s.color),
      borderRadius: "4px",
      padding: "2px 8px",
      whiteSpace: "nowrap",
      userSelect: "none"
    }
  }, s.label);
}
function VerificationTracker() {
  var _useState5 = useState(function () {
      try {
        var saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch (_unused) {}
      return DEFAULT_MODULES.map(function (m) {
        return _objectSpread(_objectSpread({}, m), {}, {
          stages: Object.fromEntries(STAGES.map(function (s) {
            return [s.key, "NOT_STARTED"];
          }))
        });
      });
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    modules = _useState6[0],
    setModules = _useState6[1];
  var _useState7 = useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    newModule = _useState8[0],
    setNewModule = _useState8[1];
  var _useState9 = useState(""),
    _useState0 = _slicedToArray(_useState9, 2),
    newNote = _useState0[0],
    setNewNote = _useState0[1];
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    editingNote = _useState10[0],
    setEditingNote = _useState10[1];
  var _useState11 = useState("ALL"),
    _useState12 = _slicedToArray(_useState11, 2),
    filter = _useState12[0],
    setFilter = _useState12[1];
  var _useState13 = useState("connecting"),
    _useState14 = _slicedToArray(_useState13, 2),
    syncStatus = _useState14[0],
    setSyncStatus = _useState14[1];

  // Refs to coordinate Firestore ↔ state without infinite loops
  var isRemoteUpdate = useRef(false); // true while applying a remote snapshot
  var saveTimer = useRef(null); // debounce handle
  var firebaseRef = useRef(null); // { setDoc, docRef } once Firebase loads
  var unsubRef = useRef(null); // onSnapshot unsubscribe handle

  // ── Load Firebase asynchronously via script tags (no import()) ───
  useEffect(function () {
    var cancelled = false;
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var s = document.createElement("script");
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    function initFirestore() {
      if (cancelled) return;
      try {
        if (!window.firebase.apps.length) {
          window.firebase.initializeApp(FIREBASE_CONFIG);
        }
        var docRef = window.firebase.firestore().collection("trackers").doc("elen6350_v1");
        firebaseRef.current = {
          docRef: docRef
        };
        unsubRef.current = docRef.onSnapshot(function (snap) {
          if (cancelled) return;
          if (snap.exists) {
            var remote = snap.data().modules;
            isRemoteUpdate.current = true;
            setModules(remote);
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(remote));
            } catch (e) {}
          }
          setSyncStatus("synced");
        }, function (_err) {
          if (!cancelled) setSyncStatus("error");
        });
      } catch (e) {
        console.warn("Firebase init failed:", e);
        if (!cancelled) setSyncStatus("local");
      }
    }
    loadScript("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js").then(function () {
      return loadScript("https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js");
    }).then(initFirestore).catch(function (e) {
      console.warn("Firebase scripts failed to load:", e);
      if (!cancelled) setSyncStatus("local");
    });
    return function () {
      cancelled = true;
      if (unsubRef.current) {
        unsubRef.current();
        unsubRef.current = null;
      }
    };
  }, []);

  // ── Write to Firestore (debounced) whenever modules change ────────
  useEffect(function () {
    // Skip write-back when this update came from Firestore
    if (isRemoteUpdate.current) {
      isRemoteUpdate.current = false;
      return;
    }

    // Always persist locally
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(modules));
    } catch (e) {}
    if (!firebaseRef.current) return;
    setSyncStatus("saving");
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(function () {
      var fb = firebaseRef.current;
      if (!fb) return;
      fb.docRef.set({
        modules: modules,
        savedAt: new Date().toISOString()
      }).then(function () {
        setSyncStatus("synced");
      }).catch(function () {
        setSyncStatus("error");
      });
    }, 800);
  }, [modules]);
  var cycleStatus = function cycleStatus(modIdx, stageKey) {
    setModules(function (prev) {
      var next = _toConsumableArray(prev);
      var curIdx = STATUS_ORDER.indexOf(next[modIdx].stages[stageKey]);
      next[modIdx] = _objectSpread(_objectSpread({}, next[modIdx]), {}, {
        stages: _objectSpread(_objectSpread({}, next[modIdx].stages), {}, _defineProperty({}, stageKey, STATUS_ORDER[(curIdx + 1) % STATUS_ORDER.length]))
      });
      return next;
    });
  };
  var addModule = function addModule() {
    if (!newModule.trim()) return;
    setModules(function (prev) {
      return [].concat(_toConsumableArray(prev), [{
        name: newModule.trim(),
        notes: newNote.trim(),
        stages: Object.fromEntries(STAGES.map(function (s) {
          return [s.key, "NOT_STARTED"];
        }))
      }]);
    });
    setNewModule("");
    setNewNote("");
  };
  var removeModule = function removeModule(idx) {
    return setModules(function (prev) {
      return prev.filter(function (_, i) {
        return i !== idx;
      });
    });
  };
  var updateNote = function updateNote(idx, note) {
    setModules(function (prev) {
      var next = _toConsumableArray(prev);
      next[idx] = _objectSpread(_objectSpread({}, next[idx]), {}, {
        notes: note
      });
      return next;
    });
    setEditingNote(null);
  };
  var totalCells = modules.length * STAGES.length;
  var counts = Object.fromEntries(STATUS_ORDER.map(function (s) {
    return [s, 0];
  }));
  modules.forEach(function (m) {
    return STAGES.forEach(function (s) {
      return counts[m.stages[s.key]]++;
    });
  });
  var passRate = totalCells > 0 ? (counts.PASS / totalCells * 100).toFixed(0) : 0;
  var shown = filter === "ALL" ? modules : modules.filter(function (m) {
    return Object.values(m.stages).some(function (s) {
      return s === filter;
    });
  });
  var thStyle = {
    padding: "8px 10px",
    fontSize: "12px",
    fontFamily: "var(--tr-mono)",
    fontWeight: 600,
    letterSpacing: "0.03em",
    textTransform: "none",
    color: "var(--tr-text)",
    borderBottom: "1px solid var(--tr-border)",
    background: "var(--tr-surface)",
    textAlign: "center",
    whiteSpace: "nowrap"
  };
  var inputStyle = {
    background: "var(--tr-bg)",
    border: "1px solid var(--tr-border)",
    borderRadius: "5px",
    color: "var(--tr-text)",
    padding: "7px 11px",
    fontSize: "13px",
    fontFamily: "var(--tr-mono)",
    outline: "none",
    flex: "1 1 160px"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--tr-text)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "8px"
    }
  }, /*#__PURE__*/React.createElement(SyncPill, {
    status: syncStatus
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
      flexWrap: "wrap",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--tr-surface)",
      border: "1px solid var(--tr-border)",
      borderRadius: "7px",
      padding: "12px 18px",
      flex: "1 1 140px",
      minWidth: "130px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "10px",
      color: "var(--tr-muted)",
      fontFamily: "var(--tr-mono)",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      marginBottom: "4px"
    }
  }, "Progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "28px",
      fontWeight: 700,
      fontFamily: "var(--tr-mono)",
      color: "var(--s-pass-text)"
    }
  }, passRate, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "4px",
      background: "var(--tr-border)",
      borderRadius: "2px",
      marginTop: "8px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(passRate, "%"),
      background: "var(--s-pass-text)",
      borderRadius: "2px",
      transition: "width 0.4s ease"
    }
  }))), STATUS_ORDER.map(function (key) {
    return /*#__PURE__*/React.createElement(StatCard, {
      key: key,
      label: STATUS[key].label,
      value: counts[key],
      color: STATUS[key].text,
      active: filter === key,
      onClick: function onClick() {
        return setFilter(filter === key ? "ALL" : key);
      }
    });
  }), filter !== "ALL" && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setFilter("ALL");
    },
    style: {
      background: "none",
      border: "1px solid var(--tr-border)",
      borderRadius: "7px",
      padding: "8px 14px",
      cursor: "pointer",
      color: "var(--tr-muted)",
      fontSize: "12px",
      fontFamily: "var(--tr-mono)",
      alignSelf: "center"
    }
  }, "\u2715 clear")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto",
      borderRadius: "7px",
      border: "1px solid var(--tr-border)"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "800px"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: _objectSpread(_objectSpread({}, thStyle), {}, {
      textAlign: "left",
      paddingLeft: "14px",
      minWidth: "160px"
    })
  }, "Module"), STAGES.map(function (s) {
    return /*#__PURE__*/React.createElement("th", {
      key: s.key,
      style: thStyle
    }, s.label);
  }), /*#__PURE__*/React.createElement("th", {
    style: _objectSpread(_objectSpread({}, thStyle), {}, {
      textAlign: "left",
      minWidth: "150px"
    })
  }, "Notes"), /*#__PURE__*/React.createElement("th", {
    style: _objectSpread(_objectSpread({}, thStyle), {}, {
      width: "32px"
    })
  }))), /*#__PURE__*/React.createElement("tbody", null, shown.map(function (mod) {
    var ri = modules.indexOf(mod);
    return /*#__PURE__*/React.createElement("tr", {
      key: ri,
      style: {
        borderBottom: "1px solid var(--tr-border)"
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.background = "var(--tr-surface)";
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "8px 14px",
        fontFamily: "var(--tr-mono)",
        fontSize: "13px",
        fontWeight: 600,
        color: "var(--tr-text)"
      }
    }, mod.name), STAGES.map(function (s) {
      return /*#__PURE__*/React.createElement("td", {
        key: s.key,
        style: {
          padding: "10px 5px",
          textAlign: "center",
          verticalAlign: "middle"
        }
      }, /*#__PURE__*/React.createElement(StatusBadge, {
        status: mod.stages[s.key],
        onClick: function onClick() {
          return cycleStatus(ri, s.key);
        }
      }));
    }), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 10px",
        verticalAlign: "middle"
      }
    }, editingNote === ri ? /*#__PURE__*/React.createElement("input", {
      autoFocus: true,
      defaultValue: mod.notes,
      onBlur: function onBlur(e) {
        return updateNote(ri, e.target.value);
      },
      onKeyDown: function onKeyDown(e) {
        if (e.key === "Enter") updateNote(ri, e.target.value);
        if (e.key === "Escape") setEditingNote(null);
      },
      style: _objectSpread(_objectSpread({}, inputStyle), {}, {
        flex: "none",
        width: "100%",
        padding: "3px 7px"
      })
    }) : /*#__PURE__*/React.createElement("span", {
      onClick: function onClick() {
        return setEditingNote(ri);
      },
      style: {
        fontSize: "12px",
        color: mod.notes ? "var(--tr-muted)" : "var(--s-none-text)",
        fontFamily: "var(--tr-mono)",
        cursor: "pointer",
        fontStyle: mod.notes ? "normal" : "italic"
      }
    }, mod.notes || "add note…")), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 8px",
        textAlign: "center",
        verticalAlign: "middle"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeModule(ri);
      },
      title: "Remove",
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--tr-muted)",
        fontSize: "16px",
        padding: "2px 5px",
        borderRadius: "4px",
        lineHeight: 1
      },
      onMouseEnter: function onMouseEnter(e) {
        e.currentTarget.style.color = "var(--s-fail-text)";
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.color = "var(--tr-muted)";
      }
    }, "\xD7")));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      marginTop: "10px",
      padding: "8px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--s-pass-text)",
      fontSize: "16px",
      flexShrink: 0
    }
  }, "+"), /*#__PURE__*/React.createElement("input", {
    value: newModule,
    onChange: function onChange(e) {
      return setNewModule(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && addModule();
    },
    placeholder: "module_name",
    style: inputStyle
  }), /*#__PURE__*/React.createElement("input", {
    value: newNote,
    onChange: function onChange(e) {
      return setNewNote(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && addModule();
    },
    placeholder: "notes (optional)",
    style: inputStyle
  }), /*#__PURE__*/React.createElement("button", {
    onClick: addModule,
    style: {
      background: "var(--tr-surface)",
      border: "1px solid var(--tr-border)",
      borderRadius: "5px",
      color: "var(--tr-text)",
      padding: "7px 16px",
      cursor: "pointer",
      fontSize: "13px",
      fontFamily: "var(--tr-mono)",
      fontWeight: 600,
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, "Add")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      color: "var(--tr-muted)",
      fontFamily: "var(--tr-mono)",
      marginTop: "8px"
    }
  }, modules.length, " modules \xB7 ", totalCells, " checkpoints", syncStatus !== "local" ? " · synced via Firebase" : " · local only"));
}
var root = ReactDOM.createRoot(document.getElementById("tracker-root"));
root.render(/*#__PURE__*/React.createElement(VerificationTracker, null));