import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { tools } from '../src/data/stack';

test('renders the evidence-backed stack', async ({ page }) => {
  await page.goto('./');

  await expect(page.getByRole('heading', { level: 1 })).toContainText('tools are only interesting');
  await expect(page.locator('.tool-card')).toHaveCount(tools.length);
  await expect(page.getByText(`${tools.length} verified tools and patterns`)).toBeVisible();
});

test('filters tools by search, project, and state', async ({ page }) => {
  await page.goto('./');

  await page.getByRole('searchbox').fill('Langfuse');
  await expect(page.locator('.tool-card:not([hidden])')).toHaveCount(1);
  await expect(page.getByRole('button', { name: /Langfuse/ })).toBeVisible();

  await page.getByLabel('Clear search').click();
  await page.locator('#project-filter').selectOption('paypal');
  await expect(page.getByRole('button', { name: /Datadog/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /PostHog/ })).toBeHidden();

  await page.locator('#project-filter').selectOption('all');
  await page.locator('#state-filter').selectOption('historical');
  const historicalCards = page.locator('.tool-card:not([hidden])');
  await expect(historicalCards.first()).toBeVisible();
  await expect(historicalCards).not.toHaveCount(0);
});

test('opens evidence details and supporting source', async ({ page }) => {
  await page.goto('./');

  await page.getByRole('button', { name: /Custom agent harness/ }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('heading', { name: 'Custom agent harness' })).toBeVisible();
  await expect(dialog).toContainText('approval invalidation');
  await expect(dialog.getByRole('link', { name: /Open supporting source/ })).toHaveAttribute('href', /portfolio\.kevinastuhuaman\.com/);
  await dialog.getByRole('button', { name: 'Close details' }).click();
  await expect(dialog).toBeHidden();
});

test('shows end-to-end system flows', async ({ page }) => {
  await page.goto('./');

  await page.getByRole('tab', { name: 'Systems' }).click();
  await expect(page.getByRole('heading', { name: 'Human-reviewed browser agent' })).toBeVisible();
  await expect(page.getByText('Selected work becomes a prepared form')).toBeVisible();
  await expect(page.locator('#stack-filters')).toBeHidden();
});

test('publishes machine-readable evidence', async ({ request }) => {
  const response = await request.get('stack.json');
  expect(response.ok()).toBeTruthy();
  const payload = await response.json();
  expect(payload.schemaVersion).toBe(1);
  expect(payload.tools).toHaveLength(tools.length);
  expect(payload.tools.find((tool: { id: string }) => tool.id === 'agent-harness')).toBeTruthy();
});

test('has no automated accessibility violations', async ({ page }) => {
  await page.goto('./');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test('does not overflow the viewport', async ({ page }) => {
  await page.goto('./');
  const dimensions = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: window.innerWidth }));
  expect(dimensions.width).toBeLessThanOrEqual(dimensions.viewport);
});
