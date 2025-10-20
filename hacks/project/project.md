---
layout: post
tailwind: True
title: CSP Project
description: >
  Explore the digital realm while learning core computing concepts: program logic, data representation, memory & storage, and debugging. Restore the Core by completing four instructional modules.
author: Hope F.
permalink: /project
lxdData:
  Title: "Quest for the Lost Code"
  Description: "A guided sequence of lessons that teach foundational computing concepts through an informational, story-driven experience. Complete modules to recover the Core Code and earn a knowledge summary."
  Prequisites:
    - title: "Intro to Computing Concepts"
      link: "/quest/prereq-intro"
  Topics:
    - Title: "C1: Glitched Forest — Logic & Flow"
      Genre: "Explanation"
      Level: 1
      Description: "Learn how programs execute step-by-step. Explore conditionals, loops, and common logic/syntax errors through short examples and interactive fixes."
      Categories: ["Programming Logic", "Conditionals", "Debugging"]
      Video: "/quest/1/logic-flow/video"
      Lessons: "/nodeone"
      Image: "/images/quest/glitched-forest.svg"
      Alt: "Visual explanation of conditionals and flow control"
    - Title: "C2: Data Desert — Representation & Encoding"
      Genre: "Demonstration"
      Level: 2
      Description: "Understand how text and files are represented in binary, how ASCII works, and try basic encoding and simple ciphers like the Caesar cipher."
      Categories: ["Data Representation", "Binary", "Encoding"]
      Video: "/quest/2/data-encoding/video"
      Lessons: "/quest/2/data-encoding"
      Image: "/images/quest/data-desert.svg"
      Alt: "Binary and ASCII visualization"
    - Title: "C3: Memory Maze — Storage & Performance"
      Genre: "Exploration"
      Level: 3
      Description: "Explore RAM, storage, caches, and how limited resources affect program performance. Interactive simulations show trade-offs and optimization basics."
      Categories: ["Memory", "Storage", "Performance"]
      Video: "/quest/3/memory-maze/video"
      Lessons: "/quest/3/memory-maze"
      Image: "/images/quest/memory-maze.svg"
      Alt: "Diagram of memory hierarchy and data flow"
    - Title: "C4: Final Debug — Integration & Restoration"
      Genre: "Application"
      Level: 4
      Description: "Apply debugging techniques and integrate knowledge from prior modules to fix multi-part errors and restore the Core Code. Emphasis on systematic problem solving."
      Categories: ["Integration", "Debugging", "Systems Thinking"]
      Video: "/quest/4/final-debug/video"
      Lessons: "/quest/4/final-debug"
      Image: "/images/quest/final-debug.svg"
      Alt: "Repairing the core program with debugging steps"
---
{%- include tailwind/project.html -%}
