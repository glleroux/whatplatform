# What Platform?

## Introduction

Getting a commuter train out of central London at rush hour inevitably involves a mass rush to the platform once your platform number is announced on the departure boards — and a lottery on whether you will get a seat. I recently discovered that departure platforms are known far in advance and that this data is publicly available[^1]. The interface is lacking so I wanted to build a fast and intuitive service for finding the platform that your train will depart from. 

## Motivation

On the occasion 👨🏻‍🎓

## Technology Used

- Next.JS
- HTML
- CSS
- Vercel

### API integrations

- 🖋 [Google Fonts](https://developers.google.com/fonts/docs/developer_api) — for supplying design options.
- ☁ [Cloudinary](https://cloudinary.com/documentation/javascript_integration) - for image upload and retrieval.
- 📍 [Google Places Autocomplete](https://developers.google.com/maps/documentation/javascript/places-autocomplete) — for resolving standardised, global postal addresses.
- 💳 [React Stripe.js](https://stripe.com/docs/stripe-js/react) — for collecting online payments.
- 👕 [Inkthreadable](https://www.inkthreadable.co.uk/api-documentation) — for order fulfillment.

## New things uncovered...

#### HTML Canvas / [node-canvas](https://www.npmjs.com/package/canvas)

Implemented after needing to find a way to turn the user-selected typeface into an image meeting requirements specified by Inkthreadable.

#### `await Promise.all`

Implemented after needing to filter an array using an async function. [(link)](https://advancedweb.hu/how-to-use-async-functions-with-array-filter-in-javascript/)

## Learnings for next time!

#### Use CSS-in-JS

CSS file became huge and difficult to work with. Next project should include [styled-components](https://styled-components.com/) or similar.

#### Write tests

Testing the UI (order selection) and testing the API (order creation) became onorous — even using [Postman](https://www.postman.com/). Next project should have tests, using [Jest](https://jestjs.io/) or similar.

[^1]: Courtesy of Realtime Trains (https://www.realtimetrains.co.uk/).
