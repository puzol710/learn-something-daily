const lessons = [
  {
    title: "Why AI Chips Are Reshaping the Global Economy",
    category: "Technology / Finance",
    whyItMatters: `
      Artificial intelligence models like ChatGPT, autonomous vehicles,
      and advanced medical diagnostics require massive computational power.
      This has triggered a global race for AI chips, reshaping geopolitics,
      corporate power, and supply chains.
    `,
    content: `
      AI chips are specialized processors designed to handle parallel
      computations efficiently. Unlike traditional CPUs, AI workloads rely
      heavily on matrix math, which GPUs, TPUs, and NPUs excel at.

      Companies like NVIDIA, AMD, and TSMC now sit at the center of both
      economic growth and national security concerns. Governments are
      restricting exports, subsidizing domestic chip production, and
      competing for talent.

      This shift is comparable to oil in the 20th century — whoever controls
      compute controls innovation.
    `,
    keyConcepts: [
      "GPUs vs CPUs",
      "Semiconductor supply chains",
      "AI model scaling laws",
      "Geopolitical export controls"
    ],
    realWorldExamples: `
      In 2023–2025, AI chip shortages slowed cloud expansion while driving
      NVIDIA’s market cap past traditional tech giants. The U.S. and China
      imposed chip bans, accelerating regional manufacturing.
    `,
    exploreMore: [
      { label: "How GPUs work", url: "https://www.nvidia.com/en-us/technologies/gpu-architecture/" },
      { label: "Semiconductor geopolitics", url: "https://www.cfr.org/backgrounder/china-us-technology-competition" }
    ]
  },

  {
    title: "How High Interest Rates Quietly Change Everyday Life",
    category: "Finance / Economics",
    whyItMatters: `
      Central banks use interest rates to control inflation, but the effects
      ripple far beyond mortgages and stock markets.
    `,
    content: `
      When interest rates rise, borrowing becomes more expensive.
      Businesses delay expansion, consumers spend less, and asset prices
      re-adjust.

      At the same time, savings accounts and money market funds become
      attractive again, shifting behavior from spending to saving.
    `,
    keyConcepts: [
      "Federal Reserve policy",
      "Inflation control",
      "Opportunity cost",
      "Capital allocation"
    ],
    realWorldExamples: `
      From 2022 onward, higher rates cooled housing markets globally
      while boosting cash yields not seen in decades.
    `,
    exploreMore: [
      { label: "How central banks work", url: "https://www.federalreserve.gov/monetarypolicy.htm" }
    ]
  }
];

// Pick lesson based on day
const lessonIndex = new Date().getDate() % lessons.length;
const lesson = lessons[lessonIndex];

const container = document.getElementById("lesson-container");

container.innerHTML = `
  <section>
    <h2>${lesson.title}</h2>
    <p><strong>Category:</strong> ${lesson.category}</p>
  </section>

  <section>
    <h3>Why This Matters Today</h3>
    <p>${lesson.whyItMatters}</p>
  </section>

  <section>
    <h3>Deep Dive</h3>
    <p>${lesson.content}</p>
  </section>

  <section>
    <h3>Key Concepts</h3>
    <ul>
      ${lesson.keyConcepts.map(c => `<li>${c}</li>`).join("")}
    </ul>
  </section>

  <section>
    <h3>Real-World Examples</h3>
    <p>${lesson.realWorldExamples}</p>
  </section>

  <section>
    <h3>Explore More</h3>
    <ul>
      ${lesson.exploreMore.map(l => `<li><a href="${l.url}" target="_blank">${l.label}</a></li>`).join("")}
    </ul>
  </section>
`;
