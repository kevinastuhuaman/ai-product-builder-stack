export const states = {
  shipped: { label: 'Shipped', description: 'Used in a public product or artifact.' },
  active: { label: 'Active system', description: 'Supports a live product or operating workflow.' },
  prototype: { label: 'Prototype', description: 'Implemented in a bounded experiment or proof of concept.' },
  historical: { label: 'Historical', description: 'Previously operated, evaluated, or retained for reference.' },
} as const;

export type ToolState = keyof typeof states;

export const projects = [
  { id: 'trackly', label: 'Trackly', color: '#086d55' },
  { id: 'close-ai', label: 'Close AI', color: '#d04f2f' },
  { id: 'portfolio-labs', label: 'Portfolio labs', color: '#3159c7' },
  { id: 'paypal', label: 'PayPal prototype', color: '#7349a8' },
] as const;

export const categories = [
  { id: 'models-agents', label: 'Models and agent systems', eyebrow: 'Reasoning layer', description: 'Models, protocols, and agent runtimes selected for cost, capability, and control.' },
  { id: 'retrieval-data', label: 'Retrieval and data', eyebrow: 'Context layer', description: 'Search, structured data, document parsing, and grounding for product decisions.' },
  { id: 'browser-automation', label: 'Browser and automation', eyebrow: 'Action layer', description: 'Tools and custom policies for workflows that end in real interfaces instead of clean APIs.' },
  { id: 'infrastructure', label: 'Infrastructure and delivery', eyebrow: 'Runtime layer', description: 'Cloud, infrastructure as code, deployment, networking, and production delivery.' },
  { id: 'observability', label: 'Observability and analytics', eyebrow: 'Learning layer', description: 'Tracing, product analytics, model monitoring, alerting, and operational feedback.' },
  { id: 'voice-comms', label: 'Voice and communication', eyebrow: 'Interaction layer', description: 'Real-time voice, transcription, messaging, and conversation-to-action systems.' },
  { id: 'product-quality', label: 'Product engineering and quality', eyebrow: 'Quality layer', description: 'Native and web delivery, automated testing, review, and release evidence.' },
  { id: 'gtm-ops', label: 'GTM and operating tools', eyebrow: 'Distribution layer', description: 'The systems used to reach users, manage relationships, and publish content.' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];
export type ProjectId = (typeof projects)[number]['id'];

export type Tool = {
  id: string;
  name: string;
  category: CategoryId;
  state: ToolState;
  projects: ProjectId[];
  icon?: string;
  color: string;
  summary: string;
  proof: string;
  url: string;
};

export const tools: Tool[] = [
  { id: 'anthropic', name: 'Anthropic Claude', category: 'models-agents', state: 'active', projects: ['trackly', 'close-ai'], icon: 'siAnthropic', color: '#b55b38', summary: 'Reasoning, generation, and agent workflows across product and operating systems.', proof: 'Claude SDK and Agent SDK integrations with routed fallbacks, evaluation, and spend controls.', url: 'https://www.anthropic.com/' },
  { id: 'openai', name: 'OpenAI and Codex', category: 'models-agents', state: 'active', projects: ['trackly', 'portfolio-labs'], color: '#111111', summary: 'Model inference, coding agents, and computer-use workflows.', proof: 'Used for model calls, Codex-assisted product building, and the human-reviewed browser-agent harness.', url: 'https://openai.com/' },
  { id: 'bedrock', name: 'Amazon Bedrock', category: 'models-agents', state: 'active', projects: ['trackly', 'close-ai'], color: '#d45b14', summary: 'Managed model access inside a resilient inference chain.', proof: 'Production fallback tier with routing, cost, and failure behavior documented in the backend.', url: 'https://aws.amazon.com/bedrock/' },
  { id: 'azure-openai', name: 'Azure OpenAI', category: 'models-agents', state: 'active', projects: ['trackly'], color: '#0878d1', summary: 'Managed inference and a real-time voice agent on Azure.', proof: 'Trackly uses short-lived WebRTC sessions for its Azure OpenAI Realtime onboarding agent.', url: 'https://azure.microsoft.com/products/ai-services/openai-service' },
  { id: 'vertex', name: 'Google Vertex AI', category: 'models-agents', state: 'historical', projects: ['trackly'], icon: 'siGooglecloud', color: '#4285f4', summary: 'Evaluated as an additional model tier before routing was consolidated.', proof: 'Provider integration remains documented as historical and disabled, not presented as current production.', url: 'https://cloud.google.com/vertex-ai' },
  { id: 'perplexity', name: 'Perplexity', category: 'models-agents', state: 'active', projects: ['trackly', 'close-ai'], icon: 'siPerplexity', color: '#168d8d', summary: 'Research and cited web-answer workflows.', proof: 'Integrated for research tasks where current web evidence and source attribution matter.', url: 'https://www.perplexity.ai/' },
  { id: 'mcp', name: 'Model Context Protocol', category: 'models-agents', state: 'shipped', projects: ['trackly', 'portfolio-labs', 'paypal'], icon: 'siModelcontextprotocol', color: '#6d49c5', summary: 'A public interface that lets AI clients reason over Trackly context.', proof: 'Trackly ships both a public CLI MCP server and a hosted OAuth MCP endpoint.', url: 'https://github.com/trackly-app/trackly-cli' },
  { id: 'agent-sdk', name: 'Claude Agent SDK', category: 'models-agents', state: 'prototype', projects: ['trackly', 'close-ai'], icon: 'siAnthropic', color: '#b55b38', summary: 'Bounded agent execution for multi-step product workflows.', proof: 'Used with explicit tool contracts, limits, and fallback behavior rather than an unbounded chat loop.', url: 'https://docs.anthropic.com/' },

  { id: 'postgres', name: 'PostgreSQL', category: 'retrieval-data', state: 'active', projects: ['trackly', 'close-ai'], icon: 'siPostgresql', color: '#32648d', summary: 'Primary relational system of record for jobs, users, applications, and operating data.', proof: 'The current production database runs on Azure Database for PostgreSQL behind private networking.', url: 'https://www.postgresql.org/' },
  { id: 'azure-search', name: 'Azure AI Search', category: 'retrieval-data', state: 'active', projects: ['trackly'], color: '#0878d1', summary: 'Hybrid keyword and vector retrieval for job discovery.', proof: 'Production search combines semantic retrieval with SQL fallbacks and query telemetry.', url: 'https://azure.microsoft.com/products/ai-services/ai-search' },
  { id: 'llamaindex', name: 'LlamaIndex', category: 'retrieval-data', state: 'prototype', projects: ['trackly'], color: '#7b4ff2', summary: 'Document parsing and extraction experiments for resume context.', proof: 'Evaluated for turning uploaded PDF resumes into structured product context.', url: 'https://www.llamaindex.ai/' },
  { id: 'exa', name: 'Exa', category: 'retrieval-data', state: 'prototype', projects: ['trackly', 'close-ai'], color: '#f05f43', summary: 'AI-native web discovery for research-heavy workflows.', proof: 'Evaluated in hiring-manager and company research flows where semantic web discovery is useful.', url: 'https://exa.ai/' },
  { id: 'tavily', name: 'Tavily', category: 'retrieval-data', state: 'prototype', projects: ['trackly', 'close-ai'], color: '#24957a', summary: 'Search API for grounded agent research.', proof: 'Configured as a research provider for public hiring signals and source-backed enrichment.', url: 'https://tavily.com/' },
  { id: 'parallel', name: 'Parallel', category: 'retrieval-data', state: 'prototype', projects: ['trackly'], color: '#111111', summary: 'Evaluated for deep web research and extraction workloads.', proof: 'Used in research experiments; not represented as a production dependency.', url: 'https://parallel.ai/' },

  { id: 'computer-use', name: 'Codex computer use', category: 'browser-automation', state: 'prototype', projects: ['trackly'], color: '#111111', summary: 'Chrome form preparation grounded in Trackly job and profile context.', proof: 'The agent fills and verifies fields, then pauses before submission for fresh human approval.', url: 'https://portfolio.kevinastuhuaman.com/projects/trackly/' },
  { id: 'agent-harness', name: 'Custom agent harness', category: 'browser-automation', state: 'prototype', projects: ['trackly'], color: '#086d55', summary: 'Domain rules around a general computer-use model.', proof: 'Encodes ATS mechanics, committed form state, recovery, approval invalidation, and confirmation handling.', url: 'https://portfolio.kevinastuhuaman.com/projects/trackly/' },
  { id: 'puppeteer', name: 'Puppeteer', category: 'browser-automation', state: 'active', projects: ['trackly'], icon: 'siPuppeteer', color: '#159b77', summary: 'Browser automation for source collection and structured web workflows.', proof: 'Used in the backend for browser-based ATS coverage and controlled automation.', url: 'https://pptr.dev/' },
  { id: 'playwright', name: 'Playwright', category: 'browser-automation', state: 'active', projects: ['trackly', 'portfolio-labs'], color: '#397d45', summary: 'Browser-level product verification across responsive states.', proof: 'Runs end-to-end tests and visual checks for Trackly Web and public product studies.', url: 'https://playwright.dev/' },
  { id: 'cdp', name: 'Chrome DevTools Protocol', category: 'browser-automation', state: 'shipped', projects: ['close-ai', 'portfolio-labs'], icon: 'siGooglechrome', color: '#4285f4', summary: 'Direct browser control for publishing and repeatable operations.', proof: 'Used in a public X article publisher and browser-control workflows.', url: 'https://chromedevtools.github.io/devtools-protocol/' },
  { id: 'human-approval', name: 'Human approval gates', category: 'browser-automation', state: 'shipped', projects: ['trackly', 'close-ai', 'portfolio-labs'], color: '#d04f2f', summary: 'Product policy for irreversible or subjective actions.', proof: 'Applied to browser submission, generated follow-ups, and evidence-aware investigation patterns.', url: 'https://kevinastuhuaman.github.io/ai-investigation-workbench/' },

  { id: 'azure', name: 'Microsoft Azure', category: 'infrastructure', state: 'active', projects: ['trackly', 'close-ai'], color: '#0878d1', summary: 'Current application, worker, search, networking, and database platform.', proof: 'The live Trackly backend and data plane run on Azure after a documented cloud cutover.', url: 'https://azure.microsoft.com/' },
  { id: 'azure-app-service', name: 'Azure App Service', category: 'infrastructure', state: 'active', projects: ['trackly', 'close-ai'], color: '#0878d1', summary: 'Managed runtime for public web, API, worker, and monitoring surfaces.', proof: 'The current Azure deployment separates user-facing, API, and background workloads with guarded CI paths.', url: 'https://azure.microsoft.com/products/app-service' },
  { id: 'azure-key-vault', name: 'Azure Key Vault', category: 'infrastructure', state: 'active', projects: ['trackly', 'close-ai'], color: '#0878d1', summary: 'Managed secret and key boundary for the Azure operating environment.', proof: 'Included in the reviewed production infrastructure inventory without publishing values or access topology.', url: 'https://azure.microsoft.com/products/key-vault' },
  { id: 'terraform', name: 'Terraform', category: 'infrastructure', state: 'active', projects: ['trackly', 'close-ai'], icon: 'siTerraform', color: '#7046b2', summary: 'Audit-first infrastructure documentation and drift detection.', proof: 'Azure production and AWS rollback resources have reviewed, non-mutating Terraform plans.', url: 'https://www.terraform.io/' },
  { id: 'aws-lightsail', name: 'AWS Lightsail', category: 'infrastructure', state: 'historical', projects: ['trackly', 'close-ai'], color: '#d45b14', summary: 'Previous application and worker hosting retained as rollback reference.', proof: 'Modeled in the cloud migration inventory as historical infrastructure, not current production.', url: 'https://aws.amazon.com/lightsail/' },
  { id: 'aws-rds', name: 'Amazon RDS', category: 'infrastructure', state: 'historical', projects: ['trackly', 'close-ai'], color: '#d45b14', summary: 'Previous managed PostgreSQL platform retained for rollback reference.', proof: 'Documented in the audited AWS-to-Azure migration rather than presented as live production.', url: 'https://aws.amazon.com/rds/' },
  { id: 'aws-ses', name: 'Amazon SES', category: 'infrastructure', state: 'active', projects: ['close-ai'], color: '#d45b14', summary: 'Transactional email delivery for communication workflows.', proof: 'Used behind email generation and follow-up operations with deliverability controls.', url: 'https://aws.amazon.com/ses/' },
  { id: 'cloudflare', name: 'Cloudflare', category: 'infrastructure', state: 'active', projects: ['trackly', 'close-ai', 'portfolio-labs'], icon: 'siCloudflare', color: '#f48120', summary: 'DNS, edge routing, TLS, and public-surface controls.', proof: 'Supports Trackly domains and the recruiter portfolio delivery path.', url: 'https://www.cloudflare.com/' },
  { id: 'docker', name: 'Docker', category: 'infrastructure', state: 'active', projects: ['trackly', 'close-ai', 'portfolio-labs'], icon: 'siDocker', color: '#2496ed', summary: 'Repeatable service packaging and local system simulation.', proof: 'Used for backend delivery and multi-service public architecture demonstrations.', url: 'https://www.docker.com/' },
  { id: 'github-actions', name: 'GitHub Actions', category: 'infrastructure', state: 'active', projects: ['trackly', 'close-ai', 'portfolio-labs'], icon: 'siGithubactions', color: '#2088ff', summary: 'Build, review, security, deployment, and verification automation.', proof: 'Runs multi-repo CI and the guarded deployment paths for web, backend, native, and public labs.', url: 'https://github.com/features/actions' },
  { id: 'vercel', name: 'Vercel', category: 'infrastructure', state: 'historical', projects: ['trackly', 'portfolio-labs'], icon: 'siVercel', color: '#111111', summary: 'Previous web deployment and fast prototype hosting.', proof: 'Used for earlier product surfaces before the current Azure and GitHub Pages paths.', url: 'https://vercel.com/' },
  { id: 'railway', name: 'Railway', category: 'infrastructure', state: 'historical', projects: ['close-ai'], icon: 'siRailway', color: '#6f3ed8', summary: 'Early managed deployment platform for rapid product iteration.', proof: 'Retained as historical builder experience, not current infrastructure.', url: 'https://railway.com/' },

  { id: 'langfuse', name: 'Langfuse', category: 'observability', state: 'active', projects: ['trackly', 'close-ai'], color: '#111111', summary: 'Self-hosted LLM tracing, usage, and evaluation telemetry.', proof: 'Instrumented across model routes with graceful failure behavior and public architecture notes.', url: 'https://langfuse.com/' },
  { id: 'posthog', name: 'PostHog', category: 'observability', state: 'active', projects: ['trackly'], icon: 'siPosthog', color: '#e8590c', summary: 'Product analytics for web and native behavior.', proof: 'Tracks funnels and product decisions across Trackly surfaces with privacy-aware event design.', url: 'https://posthog.com/' },
  { id: 'umami', name: 'Umami', category: 'observability', state: 'shipped', projects: ['portfolio-labs', 'close-ai'], icon: 'siUmami', color: '#111111', summary: 'Privacy-conscious analytics exposed to AI through MCP.', proof: 'A public Go MCP server turns Umami analytics into structured assistant tools.', url: 'https://github.com/kevinastuhuaman/umami-mcp-server' },
  { id: 'gatus', name: 'Gatus', category: 'observability', state: 'active', projects: ['trackly', 'close-ai'], color: '#3159c7', summary: 'Public endpoint health checks and availability monitoring.', proof: 'Deployed as part of the current public-surface monitoring path.', url: 'https://github.com/TwiN/gatus' },
  { id: 'healthchecks', name: 'Healthchecks', category: 'observability', state: 'active', projects: ['trackly', 'close-ai'], color: '#3a9b55', summary: 'Heartbeat monitoring for scheduled and background work.', proof: 'Used to detect silent failures in recurring operational workflows.', url: 'https://healthchecks.io/' },
  { id: 'firebase', name: 'Firebase', category: 'observability', state: 'active', projects: ['trackly'], icon: 'siFirebase', color: '#ff9e0b', summary: 'Native crash reporting, remote configuration, and app telemetry.', proof: 'Integrated into Trackly iOS and macOS release builds.', url: 'https://firebase.google.com/' },
  { id: 'datadog', name: 'Datadog', category: 'observability', state: 'prototype', projects: ['paypal'], icon: 'siDatadog', color: '#6c3aa8', summary: 'Diagnostics and telemetry inside an enterprise observability prototype.', proof: 'Used during the PayPal Checkout internship prototype; no employer data or architecture is published.', url: 'https://www.datadoghq.com/' },
  { id: 'cloudwatch', name: 'Amazon CloudWatch', category: 'observability', state: 'historical', projects: ['trackly', 'close-ai'], icon: 'siAmazoncloudwatch', color: '#d45b14', summary: 'Infrastructure logging and operational visibility on the prior AWS stack.', proof: 'Documented as experience from the AWS operating period, now secondary to Azure monitoring.', url: 'https://aws.amazon.com/cloudwatch/' },
  { id: 'application-insights', name: 'Application Insights', category: 'observability', state: 'active', projects: ['trackly', 'close-ai'], color: '#0878d1', summary: 'Application performance and failure telemetry on the current Azure runtime.', proof: 'Monitored as part of the production public-surface and infrastructure drift checks.', url: 'https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview' },
  { id: 'log-analytics', name: 'Azure Log Analytics', category: 'observability', state: 'active', projects: ['trackly', 'close-ai'], color: '#0878d1', summary: 'Centralized operational logs for Azure-hosted services.', proof: 'Included in the current observability inventory while keys and private workspace details remain excluded.', url: 'https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-overview' },

  { id: 'azure-realtime', name: 'Azure OpenAI Realtime', category: 'voice-comms', state: 'shipped', projects: ['trackly'], color: '#0878d1', summary: 'A low-latency voice onboarding agent over WebRTC.', proof: 'The native apps use ephemeral tokens, direct audio transport, tool calls, and session observability.', url: 'https://learn.microsoft.com/azure/ai-foundry/openai/how-to/realtime-audio-webrtc' },
  { id: 'webrtc', name: 'WebRTC', category: 'voice-comms', state: 'shipped', projects: ['trackly'], icon: 'siWebrtc', color: '#3159c7', summary: 'Real-time audio transport for Trackly voice interactions.', proof: 'Implemented in Swift with reconnect handling, audio routing, and sanitized transport metrics.', url: 'https://webrtc.org/' },
  { id: 'whisper', name: 'Whisper', category: 'voice-comms', state: 'shipped', projects: ['trackly'], color: '#111111', summary: 'On-device speech transcription for native voice input.', proof: 'Trackly includes a Whisper-based transcription path in its iOS product.', url: 'https://github.com/openai/whisper' },
  { id: 'fireflies', name: 'Fireflies', category: 'voice-comms', state: 'active', projects: ['close-ai'], color: '#7046b2', summary: 'Conversation capture that triggers follow-up workflows.', proof: 'Webhook integrations turn completed conversations into structured drafting tasks.', url: 'https://fireflies.ai/' },
  { id: 'hume', name: 'Hume AI', category: 'voice-comms', state: 'prototype', projects: ['close-ai'], color: '#d04f2f', summary: 'Voice emotion analysis for conversation context.', proof: 'Used to test whether emotional signals can improve follow-up quality and recall.', url: 'https://www.hume.ai/' },
  { id: 'twilio', name: 'Twilio', category: 'voice-comms', state: 'active', projects: ['close-ai'], color: '#f22f46', summary: 'SMS notifications for approval and operating workflows.', proof: 'Connects background processing to time-sensitive human review.', url: 'https://www.twilio.com/' },
  { id: 'vapi', name: 'Vapi', category: 'voice-comms', state: 'historical', projects: ['trackly', 'close-ai'], color: '#111111', summary: 'Earlier voice-agent prototyping before the direct Azure Realtime path.', proof: 'Kept as historical product exploration rather than presented as the current implementation.', url: 'https://vapi.ai/' },

  { id: 'nextjs', name: 'Next.js and React', category: 'product-quality', state: 'shipped', projects: ['trackly'], icon: 'siNextdotjs', color: '#111111', summary: 'The production web product and recruiter-facing job workflows.', proof: 'Trackly Web ships responsive product surfaces, agent chat, onboarding, and job management.', url: 'https://nextjs.org/' },
  { id: 'swiftui', name: 'SwiftUI', category: 'product-quality', state: 'shipped', projects: ['trackly'], icon: 'siSwift', color: '#f05138', summary: 'Native iOS and macOS product delivery.', proof: 'Trackly ships separate native applications with shared product contracts and platform-specific UX.', url: 'https://developer.apple.com/xcode/swiftui/' },
  { id: 'astro', name: 'Astro', category: 'product-quality', state: 'shipped', projects: ['portfolio-labs'], icon: 'siAstro', color: '#ff5d01', summary: 'Fast static delivery for interactive public product studies.', proof: 'Powers the investigation workbench, recruiter portfolio, and this evidence map.', url: 'https://astro.build/' },
  { id: 'typescript', name: 'TypeScript', category: 'product-quality', state: 'active', projects: ['trackly', 'close-ai', 'portfolio-labs'], icon: 'siTypescript', color: '#3178c6', summary: 'Shared implementation language for web, backend, tests, and public demos.', proof: 'Used across production services and public-safe prototypes with automated type checks.', url: 'https://www.typescriptlang.org/' },
  { id: 'go', name: 'Go', category: 'product-quality', state: 'shipped', projects: ['portfolio-labs'], icon: 'siGo', color: '#00add8', summary: 'Compact systems implementation for the Umami MCP server.', proof: 'The public server includes tests, schemas, container packaging, and release automation.', url: 'https://go.dev/' },
  { id: 'coderabbit', name: 'CodeRabbit', category: 'product-quality', state: 'active', projects: ['trackly', 'close-ai', 'portfolio-labs'], icon: 'siCoderabbit', color: '#e8590c', summary: 'Automated review inside a multi-reviewer shipping gate.', proof: 'Used with CI, Codex, security review, and explicit resolution rather than treated as a sole approval.', url: 'https://coderabbit.ai/' },
  { id: 'conductor', name: 'Conductor', category: 'product-quality', state: 'active', projects: ['trackly', 'portfolio-labs'], color: '#3159c7', summary: 'Parallel coding workspaces for isolated product delivery.', proof: 'Used to coordinate multiple bounded branches while preserving review and merge gates.', url: 'https://www.conductor.build/' },
  { id: 'figma', name: 'Figma', category: 'product-quality', state: 'prototype', projects: ['portfolio-labs'], icon: 'siFigma', color: '#a43d22', summary: 'High-fidelity product and interaction prototyping.', proof: 'Used for Berkeley and MoBagel AI product concepts, UX exploration, and roadmap communication.', url: 'https://www.figma.com/' },
  { id: 'remotion', name: 'Remotion', category: 'product-quality', state: 'shipped', projects: ['trackly', 'portfolio-labs'], icon: 'siRemotion', color: '#3159c7', summary: 'Programmatic motion graphics for product storytelling.', proof: 'Used to ship a public Trackly CLI product video with repeatable, code-reviewed motion.', url: 'https://www.remotion.dev/' },
  { id: 'xcode', name: 'Xcode and TestFlight', category: 'product-quality', state: 'shipped', projects: ['trackly'], icon: 'siXcode', color: '#0878d1', summary: 'Native build, signing, beta distribution, and release verification.', proof: 'Used for Trackly iOS and macOS delivery, including guarded builds and TestFlight distribution.', url: 'https://developer.apple.com/testflight/' },
  { id: 'replit', name: 'Replit', category: 'product-quality', state: 'historical', projects: ['portfolio-labs', 'close-ai'], icon: 'siReplit', color: '#a43d22', summary: 'Fast collaborative prototyping for earlier product experiments.', proof: 'Included as historical builder experience rather than a current delivery dependency.', url: 'https://replit.com/' },

  { id: 'clay', name: 'Clay', category: 'gtm-ops', state: 'active', projects: ['close-ai'], color: '#e36b43', summary: 'Contact enrichment and structured GTM research.', proof: 'Used in relationship and outreach workflows with explicit enrichment quality checks.', url: 'https://www.clay.com/' },
  { id: 'hubspot', name: 'HubSpot', category: 'gtm-ops', state: 'active', projects: ['close-ai'], icon: 'siHubspot', color: '#ff5c35', summary: 'CRM integration for contact and relationship operations.', proof: 'Used for contact management and source attribution workflows.', url: 'https://www.hubspot.com/' },
  { id: 'ghost', name: 'Ghost', category: 'gtm-ops', state: 'shipped', projects: ['close-ai', 'portfolio-labs'], icon: 'siGhost', color: '#111111', summary: 'Newsletter publishing and owned-audience distribution.', proof: 'Used in a voice-to-newsletter workflow and Kevin\'s publishing system.', url: 'https://ghost.org/' },
  { id: 'gmail', name: 'Gmail and Calendar', category: 'gtm-ops', state: 'active', projects: ['close-ai'], icon: 'siGmail', color: '#4285f4', summary: 'Draft, send, schedule, and follow-up actions tied to conversation context.', proof: 'Integrated through OAuth with approval-oriented relationship workflows.', url: 'https://workspace.google.com/' },
  { id: 'notion', name: 'Notion', category: 'gtm-ops', state: 'active', projects: ['close-ai'], icon: 'siNotion', color: '#111111', summary: 'Structured operating context and relationship data.', proof: 'Used in integration and workflow experiments where editable human context matters.', url: 'https://www.notion.so/' },
];

export const systems = [
  {
    id: 'job-signal',
    label: 'Trackly discovery system',
    outcome: 'Direct career-page signal becomes searchable, explainable job context.',
    steps: ['Puppeteer', 'PostgreSQL', 'Azure AI Search', 'Model routing', 'Web and native apps'],
  },
  {
    id: 'browser-agent',
    label: 'Human-reviewed browser agent',
    outcome: 'Selected work becomes a prepared form without surrendering submission control.',
    steps: ['Trackly MCP', 'Custom harness', 'Codex computer use', 'Form verification', 'Human approval'],
  },
  {
    id: 'voice-agent',
    label: 'Real-time voice onboarding',
    outcome: 'A conversation becomes structured profile context inside a native product.',
    steps: ['SwiftUI', 'Azure Realtime', 'WebRTC', 'Tool calls', 'PostHog and Langfuse'],
  },
  {
    id: 'follow-up',
    label: 'Conversation-to-follow-up',
    outcome: 'Meeting context becomes a reviewed message and a next action.',
    steps: ['Fireflies', 'Hume AI', 'Claude', 'Human review', 'Gmail and Calendar'],
  },
] as const;

export const evidenceUpdated = '2026-07-12';
