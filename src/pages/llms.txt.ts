import type { APIRoute } from 'astro';
import { categories, evidenceUpdated, tools } from '../data/stack';

export const GET: APIRoute = () => {
  const lines = [
    '# AI Product Builder Stack',
    '',
    'Author: Kevin Astuhuaman',
    'Canonical: https://kevinastuhuaman.github.io/ai-product-builder-stack/',
    `Updated: ${evidenceUpdated}`,
    '',
    'This is a public-safe, evidence-backed map of tools Kevin has used to build and operate AI products. It distinguishes shipped work, active systems, prototypes, and historical experience. It does not disclose credentials, sensitive infrastructure topology, employer data, or proprietary source code.',
    '',
    ...categories.flatMap((category) => [
      `## ${category.label}`,
      ...tools.filter((tool) => tool.category === category.id).map((tool) => `- ${tool.name} [${tool.state}]: ${tool.proof}`),
      '',
    ]),
    'Structured data: https://kevinastuhuaman.github.io/ai-product-builder-stack/stack.json',
    'Portfolio: https://portfolio.kevinastuhuaman.com',
    'GitHub: https://github.com/kevinastuhuaman',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
