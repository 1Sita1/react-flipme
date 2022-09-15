# React-flipme

---

## Install

```bash
npm i react-flipme
```

## Usage

#### Step 1: Import card component

```javascript
import { FlipCard } from "react-flipme"
```

#### Step 2: Add Front and Back components

```javascript
<FlipCard>
    <FlipCard.Front>
        Front {/* Any component or element */}
    </FlipCard.Front>
    <FlipCard.Back>
        Back {/* Any component or element */}
    </FlipCard.Back>
</FlipCard>
```

#### Step 3: Get the result

![Example](https://i.imgur.com/nJ85T2g.gif)

## Docs

React-flipme has following customizable properties:

-   `style` - any css styles you want
-   `variant` - "light" | "dark"
-   `size` - "xs" | "s" | "m" | "l" | "xl" ("m" by default)
-   `rounded` - boolean
-   `flipped`\* - boolean
-   `width` - string
-   `height` - string

> \*if "flipped" prop is provided, the control of the card will be
> automatically switched to the manual mode. It will disable its
> default behaivior (flip on hover will become unavailable)
