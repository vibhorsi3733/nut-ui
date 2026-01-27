Rules to Follow While Making Changes

The basic component code that is visible for copy and paste must be placed in a folder named user_visible_code.

The <Component props...> structure must also be visible in the same file.

Any UI-related CSS and data used in a component must be passed as props in the form of an object, and that object should be used in the core component.

For each component, there must be a variant route where all variants are available.

Do not create separate component files for variants.

Store each new variant inside a variant folder under the respective component folder.

Example:

variant/card/imageCard.ts


Nothing should be static. All values must be dynamic and driven by props or configuration.
All components must be listed in the Component Library with a live preview.

Each component must have a Variant button.

When the user clicks on a specific component, a new route should open.

The new route must display all variants of the selected component.

When the user clicks on a specific variant:

The component code must be visible.

The use case / usage example must also be visible.

The preview, variants, code, and usage must all be dynamic and driven by props (nothing static).

Optional (More Structured / Dev-Friendly Version)

Route structure example:

/component-library
/component-library/button
/component-library/button/variants


Variant route example:

/component-library/card/variants/imageCard