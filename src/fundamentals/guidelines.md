# Guidelines

- Web Content Accessibility Guidelines (WCAG)
- Authoring Tool Accessibility Guidelines (ATAG)
- WAI-ARIA

## Web Content Accessibility Guidelines (WCAG)

- Version 2.1 is published by the W3C in 2018
- Previous version of the guidelines were published in 2008 and accepted as an international ISO standard in 2012
- WCAG is technology-agnostic, applicable across all and future web technologies

### Levels of Conformance

- A: lowest level of conformance
- AAA: highest level of conformance
- Most set AA as internal standard because it's both achievable and meaningful without being too hard for developers
- <strong>important:</strong> all levels are required for at least some people with disabilities, don't ignore AAA items

### Main Principles (POUR)

#### 1. Perceivable

Informations and UI components must be presentable to users in ways they can perceive.
Ensure content is accessible to blind/deaf.

#### 2. Operable

UI components and navigation must be operable.
Make sure everything is accessible by keyboard.

#### 3. Unterstandable

Information and operation of UI must be understandable

#### 4. Robust

Content must be supported by a wide variety of user agents, including assistive technology.

## Authoring Tool Accessibility Guidelines ATAG

[Authoring Tool Accessibility Guidelines](https://www.w3.org/TR/ATAG20/) specify principles that web authoring tools should follow.

Two focus areas:

1. Make the authoring tool UI accessible
2. Support the production of accessible content

Many web sites and web applications are also authoring tools, so they are subject to the Authoring Tool Accessibility Guidelines.


## WAI-ARIA

- WAI stands for Web Accessibility Initiative
- ARIA stands for Accessible Rich Internet Applications
- ARIA is almost entirely for screenreader users
- used to fill the gaps between the features of HTML and accessibility needs of today's robust dynamic web applications.

The types of things that ARIA can help screen reader users know is:

- If a link opens a popup window
- If an object is expandable
- If an object is currently expanded or collapsed
- If something has changed or been updated on the page
- What type of object or widget it is (eg. a tab panel, a tab, a slider, an alert dialog, ...)