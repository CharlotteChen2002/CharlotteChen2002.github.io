---
title: "Superscalar Out-of-Order RISC-V Processor"
excerpt: "
<img src='/images/CS61CPU.png' style='float: left; margin-right: 15px; width: 400px; height: auto;' />
<strong><u>Charlotte Chen</u></strong><br/>
<span style='font-size: 0.9em;'><em>CSEE 4824 — Computer Architecture</em>, Spring 2025</span><br/>
<span style='font-size: 0.9em;'>
A 32-bit superscalar out-of-order RV32IM processor in SystemVerilog implementing the P6/R10K microarchitecture with speculative execution, early tag broadcast, and Simultaneous Multithreading (SMT). Features 64-entry register renaming (FreeList/MapTable), 16-entry Reservation Station, and 32-entry Reorder Buffer. Parallel functional units (3 ALUs, 2 Loads, 2 Multipliers, 1 Branch) and a hybrid BTB + Bimodal branch predictor maximize IPC. Correctness validated by automated differential testing against a C++ golden model on exhaustive instruction sequences.
</span>
<br/><br/>"
collection: portfolio
---
