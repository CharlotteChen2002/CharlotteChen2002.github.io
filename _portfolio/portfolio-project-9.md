---
title: "1024-Point Memory-Based FFT Processor in TSMC 65nm"
order: 80
excerpt: "
<img src='/images/fft_datapath.png' style='float: left; margin-right: 15px; width: 400px; height: auto;' />
<strong><u>Charlotte Chen</u></strong><br/>
<span style='font-size: 0.9em;'><em>EECS 6321</em>, Spring 2026</span><br/>
<span style='font-size: 0.9em;'>
A solo radix-2 DIF FFT processor built around a single complex butterfly PE, four single-port SRAM banks with XOR bank mapping for conflict-free access, and a 512-entry twiddle ROM, using a Q1.15 datapath with per-stage scaling. Full physical design and signoff (PrimeTime/PrimePower; Calibre LVS/DRC clean) closed at 250 MHz in 0.47 mm² and 2.57 mW, delivering 20.8 MS/s at 123 pJ/sample. Post-layout simulation matches the MATLAB golden model bit-exactly over all 10,240 outputs (SQNR 63.0 dB), and post-layout HSPICE agrees with PrimeTime within 6% on delay and 4% on power.
</span>
<br/><br/>"
collection: portfolio
---
