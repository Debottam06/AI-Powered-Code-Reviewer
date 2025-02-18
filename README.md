*AI-Powered Code Reviewer 

This project is a web-based code review tool built using React, designed to help developers analyze and improve their JavaScript code.
It features a live code editor where users can write or paste their code, and upon clicking the "Review" button, the tool sends the code to an AI-powered backend for analysis using Axios. 
The AI then returns feedback on potential errors, optimizations, and best practices, which are displayed in a Markdown-rendered review panel.
The editor, powered by react-simple-code-editor, includes syntax highlighting with Prism.js, ensuring clear and readable code. The right-side review panel supports
formatted responses with rehype-highlight and react-markdown, enhancing readability.
The tool provides structured feedback, marking issues such as incorrect handling of edge cases, performance concerns, and readability improvements.
The screenshots show an example where a JavaScript function checking for palindromes is analyzed.
The AI identifies flaws like improper handling of negative numbers, potential integer overflow, and readability concerns. 
It also suggests a corrected version of the code.
This project is useful for developers who want instant, automated feedback on their code quality,
making it a valuable learning and debugging tool for JavaScript programmers of all levels.
