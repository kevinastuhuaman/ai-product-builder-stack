import type { APIRoute } from 'astro';
import { categories, evidenceUpdated, projects, states, systems, tools } from '../data/stack';

export const GET: APIRoute = () => new Response(
  JSON.stringify({ schemaVersion: 1, updated: evidenceUpdated, states, projects, categories, systems, tools }, null, 2),
  { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
);
