🎨 Custom Icon Guide
Follow these steps to add and use custom SVG icons in this project.

1. Add the Icon Component
Create a new file in components/icons/ (e.g., AppStack.tsx) and paste your SVG code. Ensure it is configured to accept size and color props.

Example (components/icons/AppStack.tsx):

```
import React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const AppStack = ({ size = 24, color = "#262522", ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <G>
      <Path
        d="M1 8.349c0-1.037 0-1.555.154-2.016.136-.408.358-.782.651-1.097.331-.356.786-.604 1.696-1.1L7.268 2.08C8.826 1.231 9.606.806 10.243.884c.556.068 1.058.366 1.384.821.373.522.373 1.41.373 3.186V12.65c0 1.037 0 1.555-.154 2.016a2.247 2.247 0 01-.651 1.097c-.331.356-.786.604-1.696 1.1L5.732 18.919c-1.558.85-2.338 1.275-2.975 1.197a2.246 2.246 0 01-1.384-.821C1 18.773 1 17.885 1 16.11V8.349z"
        fill="url(#s0)"
      />
      <Path
        d="M6.5 9.849c0-1.037 0-1.555.154-2.016a2.247 2.247 0 01.651-1.097c.331-.356.786-.604 1.696-1.1L12.768 3.58c1.558-.85 2.338-1.275 2.975-1.197a2.246 2.246 0 011.384.821c.373.522.373 1.41.373 3.186v7.76c0 1.037 0 1.555-.154 2.016a2.247 2.247 0 01-.651 1.097c-.331.356-.786.604-1.696 1.1L11.232 20.42c-1.558.85-2.338 1.275-2.975 1.197a2.246 2.246 0 01-1.384-.821C6.5 20.273 6.5 19.385 6.5 17.61V9.849z"
        fill="url(#s1)"
      />
      <Defs>
        <LinearGradient id="s0" x1="6.5" y1="-0.5" x2="6.5" y2="21.5" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#575757" />
          <Stop offset="1" stopColor="#151515" />
        </LinearGradient>
        <LinearGradient id="s1" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E3E3E5" stopOpacity={0.6} />
          <Stop offset="1" stopColor="#BBBBC0" stopOpacity={0.6} />
        </LinearGradient>
      </Defs>
    </G>
  </Svg>
);

export default AppStack;
```

2. Export the Icon
Ensure you have export default NameOfIcon at the bottom of your file so it can be imported elsewhere.

3. Use in Navigation (_layout.tsx)
Import your custom icon and drop it into the tabBarIcon property within your Tabs configuration.

```
import AppStack from "../components/icons/AppStack";

// ... inside your Tabs.Screen
<Tabs.Screen
  name="AppStack"
  options={{
    tabBarItemStyle: { marginTop: 12 },
    title: "AppStack",
    tabBarIcon: ({ focused }) => (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <AppStack size={focused ? 28 : 24} />
      </View>
    ),
  }}
/>
```

Note: Since we are using custom SVGs, we don't use the name prop used by standard icon libraries. We control the appearance via the focused state directly on our component.