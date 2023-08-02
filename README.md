# Tailor

An application built to help you tailor your thoughts to a target description.

## About this project

I found that I was spending a lot of time trying to tailor my resume to specific job descriptions. I wanted to build a tool that would help me do this more efficiently. This is the result.

Tailor is a web application that allows you to craft customized profiles. Each profile page features two side-by-side text editors: one for the target text (e.g., a job description) and the other for the input text (e.g., your experiences).

The AI-powered functionality assists in tailoring sentences to align with the target text, such as incorporating an individual's job experiences when applying for a position.

> **Warning**
> This feature is a work in progress.
> See the "Todos" below.

Though the example I've just explained is specific to job applications, the tool can be used for any type of text tailoring.

## Todos

- [ ] Integrate OpenAI for ML text completion
- [ ] Subscriptions using Stripe
- [ ] Clean up types
- [x] ~Implement CRUD functionality~
- [x] ~Integrate a rich text editor (Tiptap)~
- [x] ~Implement authentication~
- [x] ~Dark mode~
- [x] ~Responsive styles~
- [x] ~Layout pages~
- [x] ~Build landing page~

## Known Issues

A list of things not working right now:

1. After a day of auth, the user session expires and requires the user to login twice. I am working on a fix to this (should only ask the user to login once).

2. Loading screens and components are not working correctly. I am working on a fix to this.

## Running Locally

```bash
npm run dev
# or
yarn dev
# or
pnpm
```
