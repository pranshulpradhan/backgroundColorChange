// Select the buttons and the body element using querySelector
let colorChange = document.querySelector(".changeColor");
let imageChange = document.querySelector(".changeImage");
let bodySelector = document.querySelector("body");

// Log the selected elements to the console for debugging
console.log(colorChange);
console.log(imageChange);

// Array of available colors in the color palette (initial colors provided)
const colorPalette = [
    'red','green','blue','purple','yellow','pink','orange','cyan','violet','gold','indigo','magenta','turquoise','lime','brown','teal','maroon','navy','olive','gray','silver','black','white','lavender','salmon','peru','orchid','chartreuse','sienna','slategray','khaki','thistle','tomato','cornflowerblue','darkseagreen','firebrick','dodgerblue','forestgreen','burlywood','cadetblue','chocolate','crimson','darkcyan','darkgoldenrod','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkviolet','deeppink','deepskyblue','dimgray','dimgrey','dodgerblue','gainsboro','ghostwhite','goldenrod','greenyellow','honeydew','hotpink','indianred','ivory','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgreen','lightpink','lightsalmon','lightseagreen','lightskyblue','lightsteelblue','lightyellow','limegreen','linen','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','oldlace','orangered','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','powderblue','rosybrown','royalblue','saddlebrown','sandybrown','seagreen','seashell','skyblue','slateblue','snow','springgreen','steelblue','tan','thistle','tomato','turquoise','violet','wheat','whitesmoke','yellowgreen'
];

// Add a click event listener to the "Change Background Color" button
colorChange.addEventListener('click', () => {
    // Generate a random index to select a color from the color palette
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    const selectedColor = colorPalette[randomIndex];
    // Change the background color of the body
    bodySelector.style.backgroundColor = selectedColor;
});

// Array of image paths in the image palette
const imagePalette = [
    "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=1060&t=st=1696947533~exp=1696948133~hmac=2bcf674212dd3922cae7c31d5c81677a33824da5a0d9e95cc69d701ef64ae1f8",
    "https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1601314167099-232775b3d6fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1804&q=80"
];

// Add a click event listener to the "Change Background Image" button
imageChange.addEventListener('click', () => {
    // Generate a random index to select an image from the image palette
    const randomIndex = Math.floor(Math.random() * imagePalette.length);
    const selectedImage = imagePalette[randomIndex];
    // Change the background image of the body
    bodySelector.style.backgroundImage = `url('${selectedImage}')`;
});
