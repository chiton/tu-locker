## ADDED Requirements

### Requirement: Dark Section Heading Contrast
The system SHALL ensure section headings, eyebrow labels, and descriptions remain readable when placed on dark backgrounds.

#### Scenario: Visitor reads plans section heading
- **WHEN** a visitor reaches the Planes y Formas de Pago section on its dark background
- **THEN** the eyebrow, title, and description use light/high-contrast colors that are easy to read

#### Scenario: Section heading component is reused on dark surfaces
- **WHEN** a section heading is rendered on a dark surface
- **THEN** it can use a dark-surface variant or equivalent styling without duplicating inconsistent markup
