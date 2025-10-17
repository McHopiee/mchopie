---
layout: post 
tailwind: True
title: Academic Integrity Board Game
description: >
  Roll the dice and advance through the Academic Integrity Board Game! Complete modules to unlock new paths and earn your mastery certificate.
author: Hope Fune 
permalink: /academic-integrity-game
lxdData:
  Title: "Academic Integrity Board Game"
  Description: "Roll the dice and navigate through interactive modules to master academic honesty and proper citation skills"
  GameMechanics:
    - title: "Roll to Move"
      description: "Use the dice to determine your next available module"
    - title: "Complete to Unlock"
      description: "Finish modules to unlock new board spaces"
    - title: "Collect Badges"
      description: "Earn achievement badges for each completed module"
  BoardSpaces:
    - Position: 1
      Title: "START: Academic Honesty Basics"
      Genre: "Introduction"
      Level: 0
      Description: "Begin your journey! Learn the fundamental principles of academic integrity before rolling the dice."
      Categories: ["Introduction", "Basics", "Foundation"]
      Unlocked: true
      DiceRequirement: "Auto-unlock"
    - Position: 2
      Title: "Plagiarism Consequence Corner"
      Genre: "Case Studies"
      Level: 1
      Description: "Land here to explore real plagiarism cases! Learn from others' mistakes before they cost you."
      Categories: ["Cases", "Consequences", "Real-world"]
      Unlocked: false
      DiceRequirement: "1-2"
    - Position: 3
      Title: "Citation Station"
      Genre: "Learning Hub"
      Level: 2
      Description: "All aboard the Citation Station! Master APA formatting with interactive tools and practice exercises."
      Categories: ["APA", "Citation", "Interactive"]
      Unlocked: false
      DiceRequirement: "3-4"
    - Position: 4
      Title: "Error Detection Arcade"
      Genre: "Mini-Game"
      Level: 3
      Description: "Play citation correction games! Spot the errors and fix broken references to advance."
      Categories: ["Games", "Error Detection", "Practice"]
      Unlocked: false
      DiceRequirement: "5-6"
    - Position: 5
      Title: "AI Writing Workshop"
      Genre: "Advanced Tools"
      Level: 4
      Description: "Enter the future! Use AI-powered tools to analyze writing, detect plagiarism, and improve originality."
      Categories: ["AI Tools", "Workshop", "Analysis"]
      Unlocked: false
      DiceRequirement: "Previous modules complete"
    - Position: 6
      Title: "Boss Battle: Final Assessment"
      Genre: "Challenge"
      Level: 5
      Description: "Face the ultimate test! Demonstrate mastery across all skills in this comprehensive challenge."
      Categories: ["Assessment", "Challenge", "Comprehensive"]
      Unlocked: false
      DiceRequirement: "All previous complete"
    - Position: 7
      Title: "FINISH: Certificate Castle"
      Genre: "Victory"
      Level: 6
      Description: "Congratulations! Claim your Academic Integrity Mastery Certificate from the Certificate Castle!"
      Categories: ["Certificate", "Achievement", "Victory"]
      Unlocked: false
      DiceRequirement: "Boss battle complete"
  GameFeatures:
    - "Interactive dice rolling mechanism"
    - "Progress tracking board"
    - "Achievement badge collection"
    - "Multiplayer leaderboards"
    - "Bonus point challenges"
    - "Power-up cards for hints"
---
{%- include tailwind/boardgame_ui.html -%}