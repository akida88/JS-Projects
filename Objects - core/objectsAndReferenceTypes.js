const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b' // blue is the property
 };

 const palette2 = palette;
 // they dont store the object itself, they are just referencing it

 palette2.green = '#ebf876';
 // we add another key witch updates both palette and palette2

 // objects are a reference types
 // we use const when we want to reference stay the same, but we still can add
 // properties and values and not changing the reference