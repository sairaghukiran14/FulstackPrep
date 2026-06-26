import type { LaneType, StudyContentType } from '../types';

export const DATA: LaneType[] = [
  {
    id: 'react',
    color: 'amber',
    title: 'Frontend — React, your stack',
    desc: 'What you already know cold. Sharpen, don’t relearn.',
    groups: [
      {
        title: 'Core React',
        items: [
          { id: 'rec-keys', label: 'Reconciliation & keys', note: 'why keys matter, what breaks without them' },
          { id: 'rec-hooks', label: 'Hook rules & closures', note: 'stale closures, dependency arrays, custom hooks' },
          { id: 'rec-refs', label: 'useRef & useImperativeHandle', note: 'managing focus, scroll, and exposing custom imperative ref methods' },
          { id: 'rec-memo', label: 'Memoization', note: 'useMemo vs useCallback vs React.memo, when it backfires' },
          { id: 'rec-render', label: 'Render behavior', note: 'what causes re-renders, batching, controlled vs uncontrolled' },
          { id: 'rec-context', label: 'Context vs state libs', note: 'when context is enough vs when you reach for Redux/Zustand' },
          { id: 'rec-suspense', label: 'Suspense & error boundaries', note: 'lazy loading, fallback UI, catching render errors' }
        ]
      },
      {
        title: 'State management (your strength)',
        items: [
          { id: 'st-rtk', label: 'Redux Toolkit internals', note: 'slices, entity adapters, normalized state — be ready to explain your Kanban work' },
          { id: 'st-tsq', label: 'TanStack Query', note: 'cache keys, stale-while-revalidate, invalidation — your recent LinkedIn post topic' },
          { id: 'st-collide', label: 'RTK + TanStack Query overlap', note: 'where server cache and client state should NOT duplicate each other' },
          { id: 'st-saga', label: 'Redux-Saga basics', note: 'generators, effects — you’ve prepped this for past interviews' }
        ]
      },
      {
        title: 'Performance',
        items: [
          { id: 'pf-cwv', label: 'Core Web Vitals', note: 'LCP, CLS, INP — you have real numbers (96+ Lighthouse) to cite' },
          { id: 'pf-split', label: 'Code splitting & lazy loading', note: 'route-based vs component-based, dynamic import()' },
          { id: 'pf-bundle', label: 'Bundle size tactics', note: 'tree-shaking, your 35% bundle reduction story' },
          { id: 'pf-virtual', label: 'List virtualization', note: 'windowing for large grids — ties to your 1000+ asset tracker' },
          { id: 'pf-workers', label: 'Web Workers in React', note: 'offloading intensive data parsing/calculations from the main thread' }
        ]
      },
      {
        title: 'TypeScript',
        items: [
          { id: 'ts-generics', label: 'Generics in practice', note: 'generic hooks, typed API responses' },
          { id: 'ts-utility', label: 'Utility types', note: 'Partial, Pick, Omit, Record — used naturally not memorized' },
          { id: 'ts-narrow', label: 'Type narrowing & guards', note: 'discriminated unions for component props/state' },
          { id: 'ts-advanced', label: 'Conditional & Mapped types', note: 'creating type-safe API wrappers, template literal types' }
        ]
      },
      {
        title: 'Server Components & Modern APIs',
        items: [
          { id: 'rsc-basics', label: 'React Server Components', note: 'Server vs Client component execution, hydration model, code-splitting implications' },
          { id: 'rsc-actions', label: 'Server Actions & Forms', note: 'progressive enhancement, useActionState, useOptimistic updates' },
          { id: 'rsc-streaming', label: 'Streaming SSR', note: 'selective hydration, chunked HTML delivery with Suspense' }
        ]
      }
    ]
  },
  {
    id: 'vue',
    color: 'teal',
    title: 'Frontend — Vue 3, new territory',
    desc: 'Map every concept back to its React equivalent as you study.',
    groups: [
      {
        title: 'Reactivity model',
        items: [
          { id: 'vue-reactive', label: 'ref vs reactive', note: 'the core mental model shift from React state' },
          { id: 'vue-computed', label: 'computed vs watch vs watchEffect', note: 'derived state vs side effects — map to useMemo/useEffect' },
          { id: 'vue-destructure', label: 'toRefs & Destructuring', note: 'maintaining reactivity when unpacking refs and reactive props' },
          { id: 'vue-proxy', label: 'How Vue reactivity works under the hood', note: 'Proxy-based tracking, why mutation is fine here unlike React' }
        ]
      },
      {
        title: 'Composition API',
        items: [
          { id: 'vue-setup', label: 'script setup syntax', note: 'the modern authoring style you’ll write daily' },
          { id: 'vue-composables', label: 'Composables', note: 'Vue’s answer to custom hooks — extracting reusable logic' },
          { id: 'vue-lifecycle', label: 'Lifecycle hooks', note: 'onMounted, onUnmounted vs React’s useEffect cleanup' },
          { id: 'vue-props', label: 'Props & emits', note: 'typed props with TS, component communication patterns' },
          { id: 'vue-provide', label: 'Provide / Inject API', note: 'dependency injection for deeply nested components without props drilling' }
        ]
      },
      {
        title: 'Pinia (state management)',
        items: [
          { id: 'pinia-store', label: 'Defining stores', note: 'compare directly against your RTK slice mental model' },
          { id: 'pinia-actions', label: 'Actions & getters', note: 'Pinia’s equivalent of thunks/reducers and selectors' },
          { id: 'pinia-compose', label: 'Composing stores', note: 'cross-store access, the pattern that replaces context drilling' }
        ]
      },
      {
        title: 'Vue Router & ecosystem',
        items: [
          { id: 'vr-routes', label: 'Route config & guards', note: 'nested routes, navigation guards vs React Router loaders' },
          { id: 'vr-dynamic', label: 'Dynamic & lazy routes', note: 'code-split routes — same goal as React, different syntax' },
          { id: 'vue-tsq', label: 'Data fetching in Vue', note: 'Vue Query / Pinia Colada if used — TanStack Query’s Vue sibling' }
        ]
      },
      {
        title: 'Advanced & Internals',
        items: [
          { id: 'vue-directives', label: 'Custom Directives', note: 'creating v-focus, v-lazy, or permission-based element rendering' },
          { id: 'vue-teleport', label: 'Teleport & Suspense', note: 'rendering components outside the DOM hierarchy, loading skeletons' },
          { id: 'vue-perf', label: 'Performance Tuning', note: 'shallowRef, shallowReactive, markRaw to optimize large-scale read-only data' }
        ]
      }
    ]
  },
  {
    id: 'domain',
    color: 'teal',
    title: 'EMS domain knowledge',
    desc: 'What makes this role different from a generic frontend job.',
    groups: [
      {
        title: 'Energy systems vocabulary',
        items: [
          { id: 'ems-bess', label: 'BESS basics', note: 'battery energy storage systems — charge/discharge cycles, SOC, SOH' },
          { id: 'ems-scada', label: 'SCADA fundamentals', note: 'supervisory control architecture, what a dashboard sits on top of' },
          { id: 'ems-telemetry', label: 'Real-time telemetry concepts', note: 'polling vs streaming, how live sensor data reaches the UI' },
          { id: 'ems-ftm', label: 'FTM vs BTM Storage', note: 'Front-of-the-Meter (utility scale) vs Behind-the-Meter (commercial/industrial) configurations' },
          { id: 'ems-protocols', label: 'Common protocols', note: 'Modbus, MQTT, OPC-UA at a conceptual level — enough to discuss, not implement' }
        ]
      },
      {
        title: 'Grid & Power Analytics',
        items: [
          { id: 'ems-balancing', label: 'Grid Balancing & Ancillary Services', note: 'frequency regulation, peak shaving, load shedding controls' },
          { id: 'ems-derms', label: 'DERMS & Microgrids', note: 'Distributed Energy Resource Management Systems and localized microgrid control' },
          { id: 'ems-solar', label: 'Solar & Wind Generation Telemetry', note: 'MPPT, active vs reactive power (kW vs kVAR), power factor monitoring' }
        ]
      },
      {
        title: 'Dashboard-specific UI concerns',
        items: [
          { id: 'ems-charts', label: 'Real-time charting', note: 'streaming chart updates without janking the UI thread' },
          { id: 'ems-alarms', label: 'Alarm/threshold UI patterns', note: 'how dashboards surface critical states clearly and fast' },
          { id: 'ems-canvas', label: 'High-Frequency Canvas/WebGL', note: 'rendering massive telemetry grids and custom Single-Line Diagrams (SLD) without DOM bloat' },
          { id: 'ems-units', label: 'Units & precision handling', note: 'kW vs kWh, formatting live numeric telemetry correctly' }
        ]
      }
    ]
  },
  {
    id: 'backend',
    color: 'amber',
    title: 'Backend & APIs',
    desc: 'Your Node/Express/Postgres experience, interview-ready.',
    groups: [
      {
        title: 'API design',
        items: [
          { id: 'be-rest', label: 'REST conventions', note: 'resource modeling, status codes used correctly, idempotency' },
          { id: 'be-graphql', label: 'GraphQL vs REST tradeoffs', note: 'when you’d pick one — you’ve used both' },
          { id: 'be-sse', label: 'SSE (Server-Sent Events)', note: 'when to choose unidirectional SSE streaming over full-duplex WebSockets' },
          { id: 'be-versioning', label: 'API versioning & error contracts', note: 'consistent error shapes across endpoints' },
          { id: 'be-webhooks', label: 'Webhook verification', note: 'signature checks — your Razorpay integration is a real example' }
        ]
      },
      {
        title: 'Auth & security',
        items: [
          { id: 'be-jwt', label: 'JWT vs session auth', note: 'token expiry, refresh flow — your 750-user rollout story' },
          { id: 'be-oauth', label: 'OAuth flow', note: 'authorization code flow at a level you can whiteboard' },
          { id: 'be-rbac', label: 'Role-based access control', note: 'how you scoped permissions across user roles' },
          { id: 'be-owasp', label: 'OWASP Top 10 mitigation', note: 'preventing XSS, CSRF, SQL Injection, and Broken Object Level Authorization (BOLA)' }
        ]
      },
      {
        title: 'Data layer',
        items: [
          { id: 'be-sql', label: 'SQL query optimization', note: 'indexes, N+1 queries, explain plans' },
          { id: 'be-schema', label: 'Schema design tradeoffs', note: 'normalization vs denormalization for read-heavy dashboards' },
          { id: 'be-queue', label: 'Background jobs / queues', note: 'BullMQ patterns from your own SaaS work' }
        ]
      },
      {
        title: 'Performance & Resiliency',
        items: [
          { id: 'be-ratelimit', label: 'Rate Limiting & Throttling', note: 'implementing sliding-window algorithms using Redis for API protection' },
          { id: 'be-migration', label: 'No-Downtime DB Migrations', note: 'running multi-phase schema changes (add, backfill, deprecate) in production' },
          { id: 'be-circuit', label: 'Resiliency Patterns', note: 'circuit breakers, retries with exponential backoff, and fallback states' }
        ]
      }
    ]
  },
  {
    id: 'deploy',
    color: 'amber',
    title: 'Deployment & DevOps',
    desc: 'Be able to describe a release end to end.',
    groups: [
      {
        title: 'Pipeline & infra',
        items: [
          { id: 'dp-cicd', label: 'CI/CD pipeline stages', note: 'build, test, deploy gates — narrate your AWS pipeline experience' },
          { id: 'dp-env', label: 'Environment config', note: 'secrets management, env-specific builds' },
          { id: 'dp-rollback', label: 'Rollback strategy', note: 'what you’d do when a deploy breaks prod' }
        ]
      },
      {
        title: 'Infrastructure & Containerization',
        items: [
          { id: 'dp-docker', label: 'Docker & Multi-Stage Builds', note: 'containerizing Node/React applications, optimizing image layers and size' },
          { id: 'dp-iac', label: 'IaC Basics (Terraform)', note: 'managing infrastructure declaratively, environment parity' },
          { id: 'dp-secrets', label: 'Secret Rotation & Vaults', note: 'safe storage and automated rotation of production database/API credentials' }
        ]
      },
      {
        title: 'Monitoring',
        items: [
          { id: 'dp-monitor', label: 'Production monitoring', note: 'logging, error tracking, uptime checks for a live dashboard' },
          { id: 'dp-perf', label: 'Performance monitoring in prod', note: 'Lighthouse CI, real user monitoring vs synthetic' },
          { id: 'dp-logs', label: 'Log Aggregation & APM', note: 'structured JSON logging, centralizing logs with ELK/Loki, setting up Datadog/NewRelic' }
        ]
      }
    ]
  },
  {
    id: 'dsa',
    color: 'gray',
    title: 'DSA & coding round',
    desc: 'Patterns you’ve drilled before — keep them warm.',
    groups: [
      {
        title: 'Core patterns',
        items: [
          { id: 'dsa-arr', label: 'Arrays & two pointers', note: 'sliding window, in-place tricks' },
          { id: 'dsa-hash', label: 'Hashing patterns', note: 'frequency maps, dedup, grouping' },
          { id: 'dsa-binary', label: 'Binary Search variations', note: 'finding lower/upper bounds, search in rotated sorted arrays' },
          { id: 'dsa-lru', label: 'LRU cache', note: 'you’ve built this before — re-derive it cold' },
          { id: 'dsa-tree', label: 'Trees & recursion', note: 'traversals, recursion-to-iteration tradeoffs' },
          { id: 'dsa-graph', label: 'Graph basics', note: 'BFS/DFS, when each applies' },
          { id: 'dsa-bigo', label: 'Complexity analysis', note: 'narrate time/space tradeoffs out loud while coding' }
        ]
      },
      {
        title: 'Advanced DSA Patterns',
        items: [
          { id: 'dsa-backtrack', label: 'Backtracking', note: 'generating permutations, combinations, and solving grid-based search problems' },
          { id: 'dsa-dp', label: 'Dynamic Programming', note: 'identifying overlapping subproblems, 0/1 knapsack pattern, LCS' },
          { id: 'dsa-heap', label: 'Heaps & Priority Queues', note: 'tracking Top K elements, dynamic median, interval scheduling tasks' }
        ]
      }
    ]
  },
  {
    id: 'design',
    color: 'gray',
    title: 'System design & behavioral',
    desc: 'Turn your real project metrics into structured answers.',
    groups: [
      {
        title: 'Frontend system design',
        items: [
          { id: 'sd-arch', label: 'Component architecture at scale', note: 'how you’d structure a multi-widget EMS dashboard' },
          { id: 'sd-state', label: 'State management at scale', note: 'when local state, global store, or server cache each win' },
          { id: 'sd-realtime', label: 'Real-time data architecture', note: 'WebSocket vs polling vs SSE for live telemetry' },
          { id: 'sd-db', label: 'Database selection for dashboards', note: 'time-series (Influx/Timescale) vs relational vs key-value storage' },
          { id: 'sd-microfe', label: 'Microfrontends', note: 'Webpack Module Federation — you’ve worked with this directly' }
        ]
      },
      {
        title: 'Behavioral / STAR stories',
        items: [
          { id: 'bh-metric1', label: 'The 30% asset lookup story', note: 'Asset Availability Tracker — situation, action, measurable result' },
          { id: 'bh-metric2', label: 'The 96+ Lighthouse story', note: 'performance optimization — what you changed and why it worked' },
          { id: 'bh-outage', label: 'Production Outage Recovery', note: 'handling critical outages, finding root cause under SLA pressure' },
          { id: 'bh-mentorship', label: 'Leadership & Mentorship', note: 'guiding junior devs, establishing team standards, code review protocols' },
          { id: 'bh-conflict', label: 'A conflict or disagreement story', note: 'how you handled pushback on a technical decision' },
          { id: 'bh-learning', label: 'A fast-ramp-up story', note: 'perfect place to bring up how you’re onboarding onto Vue right now' }
        ]
      }
    ]
  }
];

export const STUDY_CONTENT: Record<string, StudyContentType> = {
  'rec-keys': {
    category: 'React & Frontend',
    title: 'Reconciliation & Keys',
    desc: 'Why keys matter in React\'s reconciliation process, what breaks without them, and the underlying Diffing algorithm.',
    tabs: {
      deepdive: `
        <h4>The Reconciliation Mental Model</h4>
        <p>React uses a Virtual DOM to determine how to update the browser DOM. When a component's props or state change, React generates a new Virtual DOM tree and compares it with the previous tree (a process called <strong>Diffing</strong>).</p>
        <p>A general tree-to-tree comparison has an O(n³) complexity. To operate in O(n) linear time, React makes two heuristic assumptions:</p>
        <ol>
          <li>Two elements of different types will produce different trees. React destroys the old tree and builds the new one from scratch.</li>
          <li>The developer can hint which child elements may be stable across different renders with a <code>key</code> prop.</li>
        </ol>
        
        <h4>Case Study: The "Index as Key" Mutation Bug</h4>
        <p><strong>Scenario:</strong> You render a dynamic list of input fields, using the array index as the key. Users can delete entries from the middle of the list.</p>
        <p><strong>Problem:</strong> When you delete the first item, the state of the list shrinks. However, the first item in the new list now has index <code>0</code>. React diffs the keys: old index <code>0</code> vs new index <code>0</code>. React sees the keys match, assumes the node is the same, and simply updates the text prop of the item. However, React does NOT remount the input field. If the user had typed something into the input field (which uses local DOM state), that text remains in the first input box, but the label shifts down! The state is now misaligned.</p>
        <p><strong>Solution:</strong> Always use stable, unique identifiers (e.g. <code>item.id</code> from your database or generated on creation) as keys.</p>
      `,
      qa: `
        <div class="qa-item">
          <div class="qa-q">Q: What happens if you omit keys or use random values (like Math.random()) as keys?</div>
          <div class="qa-a">A: If you omit keys in dynamic lists, React defaults to using array indices, causing potential state misalignment bugs and unnecessary re-renders. If you use random values as keys on every render, React will completely tear down and rebuild the entire DOM tree for the list on every state update, leading to severe performance lag, loss of keyboard focus, and reset of all local component state.</div>
        </div>
        <div class="qa-item">
          <div class="qa-q">Q: When is it safe to use the array index as a key?</div>
          <div class="qa-a">A: It is safe ONLY when three conditions are met: (1) The list and items are static (never reordered, added, or deleted), (2) the items have no local state (uncontrolled inputs, toggles, etc.), and (3) the list is never filtered. Otherwise, unique IDs are required.</div>
        </div>
      `,
      code: `// ❌ BAD: Index as key in dynamic list
{items.map((item, index) => (
  <TodoItem key={index} text={item.text} />
))}

//  GOOD: Stable unique ID as key
{items.map((item) => (
  <TodoItem key={item.id} text={item.text} />
))}`
    }
  },
  'rec-hooks': {
    category: 'React & Frontend',
    title: 'Hook Rules & Closures',
    desc: 'Rules of hooks, execution order guarantees, and the mechanics of stale closures in React hooks.',
    tabs: {
      deepdive: `
        <h4>The Mental Model</h4>
        <p>React Hooks rely on a stable execution call order. Under the hood, React stores a list of hook states (a linked list of fibers) for each component. On every render, React runs hooks in the exact same sequence, traversing this linked list. If hooks are inside loops or conditionals, the execution order shifts, misaligning the hook state index.</p>
        
        <h4>Stale Closures</h4>
        <p>React hooks capture state within a JavaScript <strong>closure</strong>. A closure "remembers" the variables in its scope at the time it was created. If a hook (like <code>useEffect</code> or <code>useCallback</code>) uses a state variable but does not list it in its dependency array, the callback remains bound to the outdated closure created in a previous render, referencing old state values. This is called a <strong>stale closure</strong>.</p>
        
        <h4>Case Study: Stale Telemetry Timer</h4>
        <p><strong>Scenario:</strong> You set up a WebSocket telemetry message listener inside a <code>useEffect</code> to aggregate incoming values into a state array.</p>
        <p><strong>Problem:</strong> If the message callback is registered with an empty dependency array <code>[]</code>, the callback closure captures the initial empty array <code>state = []</code>. Every time a telemetry message arrives, the listener runs, updates the state using <code>setData([...data, message])</code>, but since <code>data</code> is captured as <code>[]</code> in the closure, it constantly resets to <code>[message]</code> instead of accumulating values!</p>
        <p><strong>Solution:</strong> Use functional state updates <code>setData(prev => [...prev, message])</code> which avoids capturing the state variable in the closure, or add the state variable to the dependency array (which requires cleanup handlers to avoid registering multiple event listeners).</p>
      `,
      qa: `
        <div class="qa-item">
          <div class="qa-q">Q: Why can't React hooks be called inside conditionals or loops?</div>
          <div class="qa-a">A: React maps hooks to a linear array of state cells linked to the component fiber. If a hook is skipped due to a conditional block, all subsequent hook calls will read the wrong state cell, corrupting state and throwing runtime errors.</div>
        </div>
        <div class="qa-item">
          <div class="qa-q">Q: How does returning functional state updates resolve stale closures?</div>
          <div class="qa-a">A: Functional updates like <code>setCount(c => c + 1)</code> supply the absolute latest state directly from React's engine, eliminating dependency on the local closure variable.</div>
        </div>
      `,
      code: `// ❌ BAD: Stale closure in interval timer
useEffect(() => {
  const id = setInterval(() => {
    // data is stale; captures the value of data when effect mounted
    console.log(data);
  }, 1000);
  return () => clearInterval(id);
}, []); // Empty dependency array captures initial scope

//  GOOD: Functional state update resolves stale scope
useEffect(() => {
  const id = setInterval(() => {
    setCount(prevCount => prevCount + 1);
  }, 1000);
  return () => clearInterval(id);
}, []);`
    }
  },
  'pf-cwv': {
    category: 'React & Performance',
    title: 'Core Web Vitals (CWV)',
    desc: 'Deep dive into LCP, CLS, and INP metrics, and architectural strategies to optimize frontend scores.',
    tabs: {
      deepdive: `
        <h4>The Mental Model</h4>
        <p>Core Web Vitals are Google's metrics for evaluating page speed and user experience:</p>
        <ul>
          <li><strong>LCP (Largest Contentful Paint)</strong>: Measures loading performance. The main element (usually hero image or banner) should render within <strong>2.5 seconds</strong>.</li>
          <li><strong>CLS (Cumulative Layout Shift)</strong>: Measures visual stability. Page layout shifts should score less than <strong>0.1</strong>.</li>
          <li><strong>INP (Interaction to Next Paint)</strong>: Measures responsiveness. Time between click/tap and the next visual frame should be under <strong>200ms</strong>. (Replaced FID in 2024).</li>
        </ul>
        
        <h4>Case Study: Optimizing a Live SCADA Dashboard</h4>
        <p><strong>Problem:</strong> An energy dashboard suffered from slow LCP due to massive React bundles delaying the hero chart, CLS due to layout reflows when live alarms loaded, and poor INP (450ms) because continuous WebSocket feeds blocked the main thread.</p>
        <p><strong>Remediation:</strong>
          <br>1. <em>LCP:</em> Code-split the heavy chart component using <code>React.lazy()</code>. Prioritized the container layout.
          <br>2. <em>CLS:</em> Assigned explicit aspect ratio placeholders to alarm container divs so they reserve space before data arrives.
          <br>3. <em>INP:</em> Offloaded WebSocket packet parsing to a Web Worker, freeing up the main thread's event loop.
        </p>
        <p><strong>Result:</strong> Lighthouse performance score improved from 64 to 98. LCP dropped to 1.8s, CLS to 0.02, and INP to 42ms.</p>
      `,
      qa: `
        <div class="qa-item">
          <div class="qa-q">Q: What causes layout shift (CLS) and how do you prevent it?</div>
          <div class="qa-a">A: CLS is caused by dynamically inserted content (images without dimensions, slow loading ads, or async components) resizing containers. Prevent it by reserving heights with CSS skeletons, setting aspect-ratio properties, and avoiding shifting existing elements down.</div>
        </div>
        <div class="qa-item">
          <div class="qa-q">Q: How do you debug a high INP (Interaction to Next Paint) score?</div>
          <div class="qa-a">A: Use Chrome DevTools Performance panel. Look for long tasks (tasks > 50ms marked with red flags). Identify if React re-rendering, layout recalculations, or heavy synchronous JS execution is blocking the paint event after click.</div>
        </div>
      `,
      code: `// 🚀 Optimizing INP by yielding execution to the main thread
function handleHeavyTelemetryUpdate(data) {
  // Instead of processing 1000 items synchronously, process in chunks
  function processChunk(startIndex) {
    const chunk = data.slice(startIndex, startIndex + 100);
    processBatch(chunk);
    
    if (startIndex + 100 < data.length) {
      // Yield control back to browser so it can handle user clicks and paints
      setTimeout(() => processChunk(startIndex + 100), 0);
    }
  }
  processChunk(0);
}`
    }
  },
  'vue-reactive': {
    category: 'Vue 3 & Ecosystem',
    title: 'ref vs reactive',
    desc: 'The mental model shift from React state to Vue reactive proxies. Understanding getter/setter traps.',
    tabs: {
      deepdive: `
        <h4>The Mental Model shift from React</h4>
        <p>In React, state is immutable. To update the view, you must trigger a render cycle with a setter: <code>setCount(count + 1)</code>, which runs the entire component function again.</p>
        <p>In Vue 3, the component function (the setup script) runs <strong>only once</strong> during creation. Vue wraps variables in ES6 <strong>Proxies</strong>. When you read a reactive value during render, Vue registers it as a dependency. When you write/mutate it directly (e.g. <code>count.value++</code>), the proxy's <code>set</code> trap intercepts the change and pushes updates to the reactive effects that read it. Re-rendering is local and target-specific.</p>
        
        <h4>ref vs reactive</h4>
        <ul>
          <li><strong>ref</strong>: Wraps primitive values (numbers, strings, booleans) or objects in an object with a single <code>.value</code> getter/setter. It maintains reactivity across ref pass-throughs.</li>
          <li><strong>reactive</strong>: Takes an object and returns a reactive Proxy of that object. Modifying properties on it updates the DOM. However, if you destructure it or reassign it, the reactivity reference is lost.</li>
        </ul>
        
        <h4>Case Study: Reactivity Loss Bug</h4>
        <p><strong>Problem:</strong> A developer attempts to extract settings from a reactive state: <code>const { host, port } = reactive({ host: 'localhost', port: 8080 })</code>. Changing the host variable does not update the template.</p>
        <p><strong>Solution:</strong> Destructuring a reactive proxy strips the getter/setter interception. Use <code>toRefs()</code> to convert the properties into reactive refs, or just keep them inside the original state object.</p>
      `,
      qa: `
        <div class="qa-item">
          <div class="qa-q">Q: Why does Vue allow direct mutations (like state.count = 5) while React forbids them?</div>
          <div class="qa-a">A: React relies on shallow comparison of state objects to decide if it should re-render. If you mutate a React state object directly, its reference remains the same, so React skips renders. Vue uses ES6 Proxy traps to intercept the property mutations immediately, meaning it does not rely on reference comparison to trigger updates.</div>
        </div>
        <div class="qa-item">
          <div class="qa-q">Q: What happens under the hood when a ref value is modified?</div>
          <div class="qa-a">A: Reading <code>ref.value</code> triggers a dependency track (<code>track()</code>), adding the active component render function to the ref's subscriber Set. Mutating <code>ref.value = newValue</code> triggers a dependency trigger (<code>trigger()</code>), scheduling all subscriber components for update queue execution.</div>
        </div>
      `,
      code: `// ❌ BAD: Destructuring reactive breaks reactivity
const state = reactive({ count: 0 });
let { count } = state; // 'count' is now just a plain number copy!
count++; // Will NOT trigger DOM updates.

//  GOOD: Using ref or toRefs
const activeCount = ref(0);
activeCount.value++; // Updates DOM!

const config = reactive({ host: '127.0.0.1' });
const { host } = toRefs(config); // 'host' is now a ref pointing to config.host`
    }
  },
  'ems-bess': {
    category: 'EMS Domain Knowledge',
    title: 'BESS Fundamentals',
    desc: 'Battery Energy Storage Systems (BESS) core operations, State of Charge (SOC), State of Health (SOH), and power curves.',
    tabs: {
      deepdive: `
        <h4>BESS Overview</h4>
        <p>Battery Energy Storage Systems (BESS) store electrical energy for dispatch during times of high demand. BESS dashboards track key telemetry metrics:</p>
        <ul>
          <li><strong>SOC (State of Charge)</strong>: The battery's current energy level as a percentage of its capacity (like a fuel gauge).</li>
          <li><strong>SOH (State of Health)</strong>: The battery's degraded capacity compared to its original capacity. (e.g. 90% SOH means a 100MWh battery can now store at most 90MWh).</li>
          <li><strong>C-Rate</strong>: The rate at which a battery charges or discharges. A 1C rate charges the battery fully in 1 hour; 2C charges it in 30 minutes.</li>
          <li><strong>Active Power (kW/MW)</strong>: Power actively dispatched to the grid.</li>
          <li><strong>Reactive Power (kVAR/MVAR)</strong>: Idle power used to stabilize grid voltage.</li>
        </ul>
        
        <h4>Case Study: BESS Peak Shaving Dashboard</h4>
        <p><strong>Scenario:</strong> You are designing a control widget for a commercial BESS system. The goal is to perform <strong>peak shaving</strong>: discharging the battery when utility demand peaks to avoid high demand charges.</p>
        <p><strong>Implementation:</strong> The dashboard monitors active grid load (kW) and battery SOC. When grid load exceeds 500kW, the battery discharges at a rate proportional to the excess load, subject to the battery's active power limits. The UI must animate the discharge state and flash alerts if SOC drops below the 20% safety threshold to protect cell longevity.</p>
      `,
      qa: `
        <div class="qa-item">
          <div class="qa-q">Q: What causes battery degradation (drop in SOH)?</div>
          <div class="qa-a">A: SOH degradation is driven by deep cycling (discharging to 0% and charging to 100%), operating at high temperatures, high C-rates (rapid charge/discharge), and cycle count. BESS software restricts usable SOC to 10%–90% to prolong battery life.</div>
        </div>
        <div class="qa-item">
          <div class="qa-q">Q: Why must a BESS dashboard show reactive power (MVAR) in addition to active power (MW)?</div>
          <div class="qa-a">A: Active power (MW) is the actual energy doing work. Reactive power (MVAR) is required to sustain magnetic fields in motors/generators and regulate grid voltage. Batteries can inject reactive power to support local grid voltage stability during voltage sags.</div>
        </div>
      `,
      code: `// Simple simulation of BESS state transitions based on grid load
function calculateBatteryAction(gridLoadkW, batteryState) {
  const PEAK_THRESHOLD = 500; // kW
  const MIN_SOC = 20; // % safety buffer
  
  const { soc, maxPowerOutkW } = batteryState;

  if (soc <= MIN_SOC) {
    return { action: 'IDLE', dispatchkW: 0, reason: 'Low State of Charge' };
  }

  if (gridLoadkW > PEAK_THRESHOLD) {
    const requiredShaving = gridLoadkW - PEAK_THRESHOLD;
    const dischargekW = Math.min(requiredShaving, maxPowerOutkW);
    return { action: 'DISCHARGING', dispatchkW: dischargekW, target: 'Grid Shaving' };
  }

  return { action: 'CHARGING_READY', dispatchkW: 0, target: 'Grid Balance' };
}`
    }
  },
  'be-sse': {
    category: 'Backend & APIs',
    title: 'SSE (Server-Sent Events)',
    desc: 'Unidirectional live data streams over HTTP. SSE vs WebSockets for real-time telemetry.',
    tabs: {
      deepdive: `
        <h4>The Mental Model</h4>
        <p>Modern applications frequently require real-time updates. Developers often default to WebSockets, but WebSockets are a completely different, full-duplex protocol over TCP. They require custom proxy configs, bypass standard HTTP features, and increase server state footprint.</p>
        <p><strong>SSE (Server-Sent Events)</strong> is a native, unidirectional protocol built directly on top of HTTP. The client opens a persistent connection via <code>EventSource</code>, and the server sends updates as a plain-text stream using the <code>text/event-stream</code> MIME type.</p>
        
        <h4>SSE vs WebSockets Tradeoffs</h4>
        <table border="1" cellpadding="6" style="border-collapse: collapse; border-color: var(--line); width:100%; font-size:13.5px; margin: 10px 0; color: var(--text);">
          <thead>
            <tr style="background: var(--line-soft);">
              <th>Feature</th>
              <th>SSE</th>
              <th>WebSockets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Direction</td>
              <td>Unidirectional (Server to Client)</td>
              <td>Bidirectional (Duplex)</td>
            </tr>
            <tr>
              <td>Protocol</td>
              <td>HTTP / HTTPS (Standard)</td>
              <td>ws:// / wss:// (Custom)</td>
            </tr>
            <tr>
              <td>Auto-reconnect</td>
              <td>Yes (Native EventSource handled)</td>
              <td>No (Must build manual fallback)</td>
            </tr>
            <tr>
              <td>HTTP Compatibility</td>
              <td>Supports HTTP/2, HTTP Header authorization</td>
              <td>Requires protocol handshake upgrade</td>
            </tr>
          </tbody>
        </table>
        
        <h4>Case Study: Live SCADA Telemetry Stream</h4>
        <p><strong>Scenario:</strong> You are streaming live sensor metrics (temp, voltage) to an EMS dashboard. The dashboard never sends data back to the server; it only displays values.</p>
        <p><strong>Solution:</strong> Implementing WebSockets would require scaling a custom socket cluster. By choosing SSE over HTTP/2, the connections are lightweight, auto-reconnect works natively, and standard JWT cookies are passed automatically in headers, simplifying security.</p>
      `,
      qa: `
        <div class="qa-item">
          <div class="qa-q">Q: What is the HTTP/1.1 connection limit for SSE?</div>
          <div class="qa-a">A: Under HTTP/1.1, browsers restrict the number of persistent connections to the same domain to <strong>6</strong>. Opening multiple browser tabs with SSE will hang. Using HTTP/2 resolves this, allowing hundreds of multiplexed streams over a single TCP connection.</div>
        </div>
        <div class="qa-item">
          <div class="qa-q">Q: How does the server push an event in SSE format?</div>
          <div class="qa-a">A: The server writes headers: <code>'Content-Type': 'text/event-stream'</code> and <code>'Connection': 'keep-alive'</code>. It then writes text formatted as <code>data: { "val": 42 }\n\n</code> and flushes the response buffer.</div>
        </div>
      `,
      code: `// Express Backend: Stream telemetry data
app.get('/api/telemetry-stream', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const intervalId = setInterval(() => {
    const data = { temp: (20 + Math.random() * 5).toFixed(2), time: Date.now() };
    res.write(\`data: \${JSON.stringify(data)}\\n\\n\`);
  }, 1000);

  req.on('close', () => {
    clearInterval(intervalId);
    res.end();
  });
});`
    }
  },
  'be-sql': {
    category: 'Backend & APIs',
    title: 'SQL query optimization',
    desc: 'Database optimization: index types, identifying N+1 query patterns, and reading SQL explain plans.',
    tabs: {
      deepdive: `
        <h4>SQL Optimization Mental Model</h4>
        <p>Database bottlenecks occur when queries execute full-table scans instead of targeted index lookups. Optimization requires understanding indices (B-Trees) and resolving relational loading bugs.</p>
        
        <h4>Identifying and Fixing N+1 Queries</h4>
        <p><strong>Scenario:</strong> You fetch a list of 100 asset tracking cards, and for *each* asset, you run a separate query to fetch its alarm status from a relations table.</p>
        <p><strong>N+1 Pattern:</strong> 1 query to fetch assets + N queries to fetch alarms = 101 database roundtrips. This scales horribly.</p>
        <p><strong>Solution:</strong> Load the relationships in a single query using an <code>INNER JOIN</code> or <code>LEFT JOIN</code>, or query all alarms using <code>WHERE asset_id IN (1, 2, ... 100)</code> and map them in memory.</p>
        
        <h4>Case Study: Optimizing Asset Availability Tracker</h4>
        <p><strong>Problem:</strong> The dashboard's main query took 3.5s to load. Running <code>EXPLAIN ANALYZE</code> showed a sequential scan on the <code>telemetry</code> table (which had 1.2M rows) filtering by <code>device_id</code>.</p>
        <p><strong>Action:</strong> Created a composite index: <code>CREATE INDEX idx_telemetry_device_time ON telemetry (device_id, timestamp DESC);</code>. Refactored the ORM select to eager-load alarms in a single join query.</p>
        <p><strong>Result:</strong> Query execution dropped from 3.5 seconds to 42ms. The index transformed the database operation from O(N) linear search to O(log N) tree traversal.</p>
      `,
      qa: `
        <div class="qa-item">
          <div class="qa-q">Q: What is a B-Tree index and how does it speed up queries?</div>
          <div class="qa-a">A: A B-Tree (Balanced Tree) index is a self-balancing search tree data structure. It keeps key data sorted and allows logarithmic O(log N) search, sequential access, insertions, and deletions. Instead of scanning every row in a table, the database traverses nodes of the B-Tree index to locate target row pointers instantly.</div>
        </div>
        <div class="qa-item">
          <div class="qa-q">Q: How do index writes impact database write performance?</div>
          <div class="qa-a">A: Indexes speed up SELECT queries but slow down INSERT, UPDATE, and DELETE operations. This is because the database must update the B-Tree structure and re-balance nodes on every write. Keep indexes focused and avoid over-indexing columns that are rarely queried.</div>
        </div>
      `,
      code: `// ❌ BAD: N+1 query pattern using an ORM
const assets = await db.query('SELECT * FROM assets');
for (let asset of assets) {
  // Query executes in loop 100 times!
  asset.alarms = await db.query('SELECT * FROM alarms WHERE asset_id = $1', [asset.id]);
}

//  GOOD: Join query eager loading relationships
const assetsWithAlarms = await db.query(\`
  SELECT assets.*, json_agg(alarms.*) as alarms
  FROM assets
  LEFT JOIN alarms ON alarms.asset_id = assets.id
  GROUP BY assets.id
\`);`
    }
  },
  'sd-realtime': {
    category: 'System Design',
    title: 'Real-time data architecture',
    desc: 'Designing scalable streaming architectures for low-latency dashboards: WebSocket vs SSE vs polling.',
    tabs: {
      deepdive: `
        <h4>The Design Architecture</h4>
        <p>Surfacing real-time telemetry from thousands of sensors (like wind turbines or BESS batteries) requires matching the communication protocol with data flow characteristics:</p>
        <ul>
          <li><strong>WebSockets</strong>: Best for low-latency, bidirectional, message-heavy applications (collaborative whiteboards, multiplayer games). Uses TCP connection upgrades.</li>
          <li><strong>Server-Sent Events (SSE)</strong>: Best for unidirectional, real-time data feeds (dashboards, stocks, server logs). Simpler to scale, uses standard HTTP/2.</li>
          <li><strong>Short/Long Polling</strong>: Best for slow-moving data (once every 10 seconds or minutes) where connection overhead is less critical.</li>
        </ul>
        
        <h4>Architectural Case Study: SCADA Sensor Grid</h4>
        <p><strong>Goal:</strong> Scale an energy grid dashboard to support 10,000 concurrent browsers displaying 10Hz grid frequencies.</p>
        <p><strong>Design:</strong>
          <br>1. <em>Ingestion:</em> IoT sensors stream data via <strong>MQTT</strong> to an ingestion backend.
          <br>2. <em>Queue:</em> A message broker (Apache Kafka) ingests metrics and pipes them to a time-series DB (TimescaleDB) for cold storage.
          <br>3. <em>Pub/Sub:</em> A lightweight Node.js event hub reads messages from Kafka and broadcasts them via <strong>SSE streams</strong> to active clients using HTTP/2 multiplexing.
          <br>4. <em>Client Optimization:</em> The client reads SSE packages, buffers incoming packets in a requestAnimationFrame loop, and draws telemetry to a <code>&lt;canvas&gt;</code> element, skipping DOM layout recalculation loops.
        </p>
      `,
      qa: `
        <div class="qa-item">
          <div class="qa-q">Q: How do you scale WebSockets to thousands of clients?</div>
          <div class="qa-a">A: Unlike stateless REST APIs, WebSockets are stateful (each socket holds a persistent TCP socket open). To scale, you must place an API Gateway (like NGINX/HAProxy) in front, configure sticky sessions, and use a Redis Pub/Sub adapter to sync broadcasts across multiple application servers in the cluster.</div>
        </div>
        <div class="qa-item">
          <div class="qa-q">Q: How does backpressure impact real-time UI dashboards?</div>
          <div class="qa-a">A: Backpressure occurs when the server pushes messages faster than the client browser can render them, causing the JS event loop to lag and freezing the tab. Solved by client-side data throttling (buffering updates and rendering at 60fps max) and server-side downsampling (aggregating sub-second data to average intervals).</div>
        </div>
      `,
      code: `// Client-side requestAnimationFrame rendering throttle (resolves UI lag)
let telemetryBuffer = [];
let isRendering = false;

function handleIncomingPacket(packet) {
  telemetryBuffer.push(packet);
  if (!isRendering) {
    isRendering = true;
    requestAnimationFrame(renderTelemetryBatch);
  }
}

function renderTelemetryBatch() {
  const batch = [...telemetryBuffer];
  telemetryBuffer = [];
  drawToCanvas(batch);
  isRendering = false;
}`
    }
  },
  'bh-metric1': {
    category: 'Behavioral Prep',
    title: 'Asset availability tracker story',
    desc: 'STAR behavioral study demonstrating how you built an asset tracker, optimized lookups, and achieved business results.',
    tabs: {
      deepdive: `
        <h4>The STAR Framework Breakdown</h4>
        
        <div class="case-study">
          <div class="cs-section">
            <div class="cs-label">S — Situation</div>
            <p>At my previous company, our grid telemetry panel tracked 1,000+ distributed energy assets. The search and filter feature was sluggish, taking over 3 seconds to render lists on dashboard loads. This caused severe usability issues for technicians monitoring outage thresholds.</p>
          </div>
          <div class="cs-section">
            <div class="cs-label">T — Task</div>
            <p>My task was to overhaul the asset database querying logic and frontend rendering engine to reduce search lag to under 1 second and establish smooth list scrolling without UI freezing.</p>
          </div>
          <div class="cs-section">
            <div class="cs-label">A — Action</div>
            <p>I led a multi-phase optimization project:
              <br>1. <em>Database:</em> Analyzed execution logs and added indexed keys on device categories and timestamps. Eager-loaded alarm records using SQL joins to eliminate N+1 query loops.
              <br>2. <em>Frontend:</em> Replaced full list DOM rendering with <strong>List Virtualization</strong> (using windowing to render only the 15 visible rows in the viewport instead of 1000+ elements).
              <br>3. <em>Caching:</em> Integrated a Redis cache layer on backend endpoints to store static catalog IDs.
            </p>
          </div>
          <div class="cs-section">
            <div class="cs-label">R — Result</div>
            <p>The asset rendering time dropped from 3.2 seconds to <strong>under 300ms</strong> (a 90% latency reduction). Scroll animations were smooth at a solid 60fps, and search queries resolved instantaneously, drastically reducing service ticket complaints from operators.</p>
          </div>
        </div>
      `,
      qa: `
        <div class="qa-item">
          <div class="qa-q">Q: How did you handle edge cases, such as active alarms dynamically popping up in virtualized rows?</div>
          <div class="qa-a">A: I maintained a map of active alarm states in a global store (Zustand). The virtualized row component queried this local state map on mount, ensuring that when an alarm triggered offscreen, its status was correctly rendered the moment the row scrolled into the viewport.</div>
        </div>
        <div class="qa-item">
          <div class="qa-q">Q: What did you learn from this project?</div>
          <div class="qa-a">A: I learned the importance of profiling code before writing optimizations. Using Chrome DevTools and SQL EXPLAIN analyze helped me pinpoint the actual bottlenecks (e.g. DOM node counts and nested loop queries) rather than guessing.</div>
        </div>
      `,
      code: `// Conceptual structure of the list virtualization logic
function VirtualList({ items, itemHeight, viewportHeight }) {
  const [scrollTop, setScrollTop] = useState(0);
  
  const totalHeight = items.length * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    items.length - 1,
    Math.floor((scrollTop + viewportHeight) / itemHeight)
  );

  const visibleItems = items.slice(startIndex, endIndex + 1).map((item, idx) => (
    <div key={item.id} style={{
      position: 'absolute',
      top: (startIndex + idx) * itemHeight,
      height: itemHeight,
      width: '100%'
    }}>
      {item.name}
    </div>
  ));

  return (
    <div onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)} style={{ height: viewportHeight, overflowY: 'auto', position: 'relative' }}>
      <div style={{ height: totalHeight, width: '100%' }}>
        {visibleItems}
      </div>
    </div>
  );
}`
    }
  }
};

export function getStudyContent(topicId: string, topicTitle: string, topicNote: string): StudyContentType {
  if (STUDY_CONTENT[topicId]) {
    return STUDY_CONTENT[topicId];
  }
  return getFallbackContent(topicId, topicTitle, topicNote);
}

export function getFallbackContent(id: string, title: string, note: string): StudyContentType {
  let category = 'General Topic';
  let mentalModel = '';
  let caseStudy = '';
  let qaList = [];
  let codeSnippet = '';

  if (id.startsWith('rec-') || id.startsWith('pf-') || id.startsWith('ts-') || id.startsWith('st-') || id.startsWith('rsc-')) {
    category = 'React & Frontend';
    mentalModel = `
      <h4>React Mental Model</h4>
      <p>In React, state updates trigger a re-render of the component and all its children down the tree. Optimization revolves around preventing unnecessary updates via memoization (<code>useMemo</code>, <code>useCallback</code>, <code>React.memo</code>) and structured state placement.</p>
      <p>For the topic <strong>${title}</strong> (${note}), React developers must understand how the virtual DOM diffing engine reconciles updates and how to manage state lifecycle cleanly without introducing stale closures or infinite render loops.</p>
    `;
    caseStudy = `
      <div class="case-study">
        <div class="cs-section">
          <div class="cs-label">Context</div>
          <p>Optimizing render performance in a complex dashboard containing multiple live charts and telemetry grids.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">Action</div>
          <p>Implemented structural changes: split massive components into smaller self-contained components, isolated state updates near usage sites, and strategically applied memoization for heavy computations.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">Outcome</div>
          <p>Render times decreased by 40% and page interactivity (INP) dropped below 50ms, resolving UI lag under high load.</p>
        </div>
      </div>
    `;
    qaList = [
      {
        q: `Q: What is the main design pattern to keep in mind for ${title}?`,
        a: `A: Ensure that state remains localized to the components that need it to minimize the render scope. Use stable references for callbacks and objects passed to dependency arrays, and utilize TypeScript discriminated unions to guarantee compile-time type safety.`
      },
      {
        q: `Q: How does React handle updates related to ${title}?`,
        a: `A: React batches state updates inside event handlers and lifecycle triggers asynchronously, creating a new fiber tree and applying minimal, batched DOM edits during the commit phase.`
      }
    ];
    codeSnippet = `// React practice snippet for: ${title}
import React, { useState, useEffect, useCallback, useMemo } from 'react';

export function ModernComponent({ dataId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (id) => {
    setLoading(true);
    try {
      const response = await fetch(\`/api/resource/\${id}\`);
      const json = await response.json();
      setData(json);
    } catch (err) {
      console.error("Error fetching", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(dataId);
  }, [dataId, fetchData]);

  const processedData = useMemo(() => {
    if (!data) return [];
    return data.map(item => ({ ...item, timestamp: new Date(item.time) }));
  }, [data]);

  return (
    <div>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(processedData, null, 2)}</pre>}
    </div>
  );
}`;
  } else if (id.startsWith('vue-') || id.startsWith('vr-') || id.startsWith('pinia-')) {
    category = 'Vue 3 & Ecosystem';
    mentalModel = `
      <h4>Vue 3 Mental Model (React Comparison)</h4>
      <p>Unlike React's pull-based re-rendering model, Vue 3 uses a push-based fine-grained reactivity system based on ES6 <strong>Proxies</strong>. When a property on a <code>ref</code> or <code>reactive</code> object changes, Vue automatically knows exactly which template bindings and computed properties depend on it, updating only those DOM nodes directly.</p>
      <p>For the topic <strong>${title}</strong> (${note}), you map this reactivity logic directly to React's state lifecycle hooks to bridge the paradigm shift.</p>
    `;
    caseStudy = `
      <div class="case-study">
        <div class="cs-section">
          <div class="cs-label">Context</div>
          <p>Onboarding a React engineering team to a new Vue 3 Composition API workspace for a smart energy portal.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">Action</div>
          <p>Mapped React hooks concepts (e.g. <code>useEffect</code>) to Vue lifecycle equivalents (e.g. <code>onMounted</code> / <code>watchEffect</code>), established standard Composable patterns replacing custom React hooks, and set up Pinia stores to mirror Redux Toolkit logic.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">Outcome</div>
          <p>The team achieved full productivity within 2 weeks, creating clean, reactive component architectures without React-style stale closure bugs.</p>
        </div>
      </div>
    `;
    qaList = [
      {
        q: `Q: How does Vue's reactivity for ${title} differ from React's state?`,
        a: `A: In React, state must be treated as immutable, and updates are triggered via setter functions. In Vue, properties on reactive state objects can be modified directly (mutated). Vue's reactive getter/setter Proxy wrapper intercept changes under the hood and triggers dependency effects automatically.`
      },
      {
        q: `Q: What is the best practice for using ${title} inside composables?`,
        a: `A: Return refs inside an plain object rather than destructuring a reactive object directly, which would break Vue's reactive connection. Use <code>toRefs()</code> if destructuring is necessary.`
      }
    ];
    codeSnippet = `<!-- Vue 3 Single File Component style for: ${title} -->
<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from 'vue';

const props = defineProps<{
  itemId: string;
}>();

const count = ref(0);
const state = reactive({
  loading: false,
  payload: null as any
});

const doubledCount = computed(() => count.value * 2);

watch(() => props.itemId, async (newVal) => {
  state.loading = true;
  try {
    const res = await fetch(\`/api/items/\${newVal}\`);
    state.payload = await res.json();
  } finally {
    state.loading = false;
  }
}, { immediate: true });

onMounted(() => {
  console.log("Component mounted!");
});
</script>

<template>
  <div>
    <button @click="count++">Increment: {{ count }}</button>
  </div>
</template>`;
  } else if (id.startsWith('ems-')) {
    category = 'EMS Domain Knowledge';
    mentalModel = `
      <h4>Energy Management Systems Mental Model</h4>
      <p>EMS dashboards deal with high-frequency, real-time industrial telemetry. The critical concerns are low-latency data rendering, handling unit conversions (kW vs kWh), formatting precision, and rendering visual alerts without dragging down the UI thread.</p>
      <p>For the topic <strong>${title}</strong> (${note}), you must consider how the hardware protocol layer interacts with backend APIs and how that propagates safely to the user's dashboard console.</p>
    `;
    caseStudy = `
      <div class="case-study">
        <div class="cs-section">
          <div class="cs-label">Context</div>
          <p>Surfacing real-time battery status and grid load limits from a BESS controller operating at 1-second intervals.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">Action</div>
          <p>Designed a telemetry pipeline using binary buffer protocol parsing, client-side downsampling, and off-screen canvas rendering to display active/reactive charts without overloading the DOM.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">Outcome</div>
          <p>Achieved jank-free 60fps telemetry visualizers with 0% main-thread blockages, maintaining dashboard responsiveness even during critical alarm storms.</p>
        </div>
      </div>
    `;
    qaList = [
      {
        q: `Q: What makes ${title} a specific challenge in web development?`,
        a: `A: The sheer volume of telemetry data. Traditional DOM rendering is too slow for 10Hz updates. Web developers must implement throttling, Web Workers for decoding, and HTML5 Canvas or WebGL for drawing high-frequency lines.`
      },
      {
        q: `Q: How do kW and kWh differ conceptually when displaying telemetry values on a dashboard?`,
        a: `A: kW (kilowatt) is a measure of instantaneous real power capacity (flow rate), while kWh (kilowatt-hour) is the accumulation of energy generated or consumed over time (total volume). Dashboards must show kW for instantaneous status, and integration curves (kWh) for production reports.`
      }
    ];
    codeSnippet = `// Fast Telemetry Throttler & Canvas Draw example for: ${title}
class TelemetryVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.dataPoints = [];
    this.maxPoints = 200;
  }

  pushData(val) {
    this.dataPoints.push({ val, time: Date.now() });
    if (this.dataPoints.length > this.maxPoints) {
      this.dataPoints.shift();
    }
    this.draw();
  }

  draw() {
    const { ctx, canvas, dataPoints } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (dataPoints.length < 2) return;

    ctx.beginPath();
    ctx.strokeStyle = '#3FB8B0'; // EMS Teal
    ctx.lineWidth = 2;

    const dx = canvas.width / (this.maxPoints - 1);
    dataPoints.forEach((pt, idx) => {
      const x = idx * dx;
      const y = canvas.height - (pt.val / 100) * canvas.height;
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }
}`;
  } else if (id.startsWith('be-')) {
    category = 'Backend & APIs';
    mentalModel = `
      <h4>Backend Architecture Mental Model</h4>
      <p>Node.js backends excel at I/O bound operations due to their event-driven, non-blocking model. To build production-ready systems, developers must design stateless APIs, implement resilient authorization protocols, perform database optimization (indexes, clean queries), and protect services from overload (rate limiting, queues).</p>
      <p>For the topic <strong>${title}</strong> (${note}), you must balance latency, concurrency, and security.</p>
    `;
    caseStudy = `
      <div class="case-study">
        <div class="cs-section">
          <div class="cs-label">Context</div>
          <p>Designing a webhook handler and API gateway capable of verifying 500 requests/sec with low response latency.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">Action</div>
          <p>Used Express with optimized cryptographically-secure request body signature verification, set up Redis-backed rate limiting, and offloaded heavy follow-up tasks to BullMQ workers.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">Outcome</div>
          <p>Processing latency dropped under 15ms, and the backend scaled smoothly to handle sudden load bursts without dropping webhook events.</p>
        </div>
      </div>
    `;
    qaList = [
      {
        q: `Q: What security practices are essential for ${title}?`,
        a: `A: Standard validation of input payloads to prevent injection attacks, hashing credentials using bcrypt/argon2, signing JWTs with strong private keys (RS256), and verifying requests cryptographically using secure HMAC signatures.`
      },
      {
        q: `Q: How do you address performance bottlenecks related to ${title}?`,
        a: `A: Add appropriate database indices on foreign keys and frequently queried fields, use connection pooling, cache static or semi-static responses in Redis, and run explain analyze on SQL queries to identify slow scans.`
      }
    ];
    codeSnippet = `// Node.js Express Controller Example for: ${title}
const express = require('express');
const crypto = require('crypto');
const router = express.Router();

function verifyWebhookSignature(req, res, next) {
  const signature = req.headers['x-api-signature'];
  if (!signature) return res.status(401).json({ error: 'Signature missing' });

  const secret = process.env.WEBHOOK_SECRET;
  const hash = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(hash))) {
    next();
  } else {
    res.status(403).json({ error: 'Invalid HMAC signature' });
  }
}

router.post('/webhook', verifyWebhookSignature, async (req, res) => {
  res.status(200).json({ received: true });
});

module.exports = router;`;
  } else if (id.startsWith('dp-')) {
    category = 'Deployment & DevOps';
    mentalModel = `
      <h4>DevOps & CI/CD Mental Model</h4>
      <p>DevOps focuses on automation, repeatability, security, and zero-downtime releases. Multi-stage Docker builds reduce image footprints, environment secrets are separated from code, and automated integration/deployment pipelines catch flaws before hitting production.</p>
      <p>For the topic <strong>${title}</strong> (${note}), you must explain the build, test, and release cycle.</p>
    `;
    caseStudy = `
      <div class="case-study">
        <div class="cs-section">
          <div class="cs-label">Context</div>
          <p>Migrating a monolithic Node app to a microservices architecture hosted in ECS with zero deployment downtime.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">Action</div>
          <p>Configured GitHub Actions for multi-stage Docker builds, pushed to ECR, and set up AWS CodeDeploy to perform blue-green deployments with health-check checks.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">Outcome</div>
          <p>Downtime during deployments dropped to 0%, and build image sizes were reduced from 1.2GB to 140MB, improving container spinning time.</p>
        </div>
      </div>
    `;
    qaList = [
      {
        q: `Q: What is a rollback strategy for ${title}?`,
        a: `A: Store immutable Docker image tags in ECR tagged by commit SHA. If a release fails health checks in production, point the ECS service back to the previous stable image tag instantly, avoiding redeploying/rebuilding code.`
      },
      {
        q: `Q: Why are multi-stage Docker builds useful?`,
        a: `A: They allow you to build files (like running npm run build) using heavy devDependencies, and then copy only the static assets or runtime files to a clean, minimal base image (like alpine) in the final stage, eliminating build tools and reducing the attack surface.`
      }
    ];
    codeSnippet = `# Multi-stage Dockerfile example for: ${title}
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/index.js"]`;
  } else if (id.startsWith('dsa-')) {
    category = 'DSA Algorithms';
    mentalModel = `
      <h4>DSA Coding Round Mental Model</h4>
      <p>Interview coding challenges focus on optimal data structures, sliding windows, hash maps, heaps, and analyzing time/space trade-offs. The key is to verbalize your thinking process, state Big-O bounds, and start with clean layouts before coding edge cases.</p>
      <p>For the topic <strong>${title}</strong> (${note}), you must know how to trace the pointers and variables.</p>
    `;
    caseStudy = `
      <div class="case-study">
        <div class="cs-section">
          <div class="cs-label">Problem Context</div>
          <p>Optimizing lookup and index scanning algorithms when searching for records in a sorted high-frequency time series dataset.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">Optimal Approach</div>
          <p>Implemented a Binary Search variation (lower bound locator) instead of linear scan. Used division boundary checks to avoid overflow.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">Time/Space complexity</div>
          <p>Time Complexity: O(log N) instead of O(N) linear time. Space Complexity: O(1) auxiliary space.</p>
        </div>
      </div>
    `;
    qaList = [
      {
        q: `Q: How do you identify a sliding window pattern for ${title}?`,
        a: `A: Look for keywords like "longest/shortest substring", "subarray with sum K", or continuous windows in arrays. Maintain two pointers representing the window boundary and shrink/grow dynamically based on conditions.`
      },
      {
        q: `Q: What is the benefit of a Heap (Priority Queue)?`,
        a: `A: A Heap allows retrieving the minimum or maximum element in O(1) time and inserting/extracting elements in O(log K) time. It is highly efficient for "top K elements" problems or continuous stream merging.`
      }
    ];
    codeSnippet = `// DSA implementation snippet for: ${title}
function binarySearchRotated(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}`;
  } else {
    category = 'System Design & Behavioral';
    mentalModel = `
      <h4>System Design & STAR Stories</h4>
      <p>System Design is about identifying load patterns, bottleneck remediation, and trade-off balancing (Availability vs Consistency). Behavioral questions evaluate collaboration, conflict resolution, leadership, and onboarding efficiency under the STAR (Situation, Task, Action, Result) model.</p>
      <p>For the topic <strong>${title}</strong> (${note}), connect your technical metrics back to business outcomes.</p>
    `;
    caseStudy = `
      <div class="case-study">
        <div class="cs-section">
          <div class="cs-label">STAR - Situation</div>
          <p>An asset tracking platform suffered from high CPU usage and slow SQL indexing, making asset queries exceed 3.5 seconds.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">STAR - Action</div>
          <p>Analyzed query execution plans, refactored nested loops, created composite database indexes, and built a Redis caching layer for hot lookup IDs.</p>
        </div>
        <div class="cs-section">
          <div class="cs-label">STAR - Result</div>
          <p>Average query lookup time fell by 30% to 2.4 seconds, reducing server load and improving user satisfaction scores.</p>
        </div>
      </div>
    `;
    qaList = [
      {
        q: `Q: How should you structure your response for ${title}?`,
        a: `A: Use the STAR methodology. Describe the context (Situation), your responsibilities (Task), the engineering steps you took (Action), and quantify the success with metrics (Result) like Lighthouse score improvements, response latency, or developer onboarding times.`
      },
      {
        q: `Q: What is a typical bottleneck in system design for ${title}?`,
        a: `A: Network database I/O and state synchronization. Mitigate by choosing appropriate caching layers, using event-driven communication (RabbitMQ/Kafka), and scaling database reads via read-replicas.`
      }
    ];
    codeSnippet = `// System Design layout representation for: ${title}
/*
               [ Client Browser / Web App ]
                            |
                   ( WebSocket / REST )
                            |
                     [ API Gateway ]
                      /     |     \\
            [ auth ]     [ cache ]   [ rate limit ]
*/`;
  }

  return {
    category,
    title,
    desc: note,
    tabs: {
      deepdive: `
        ${mentalModel}
        <h4>Real-World Case Study</h4>
        ${caseStudy}
      `,
      qa: qaList.map(item => `
        <div class="qa-item">
          <div class="qa-q">${item.q}</div>
          <div class="qa-a">${item.a}</div>
        </div>
      `).join(''),
      code: `
        <pre><code class="language-javascript">${codeSnippet.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
      `
    }
  };
}
