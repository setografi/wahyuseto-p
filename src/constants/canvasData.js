// // Constants
// export const fontFamily = 'IBM Plex Sans';

// export const tailwindColors = {
//   textPrimary: '#FFFFFF',
//   textSecondary: '#F8F9FA',
// };

// export const fontSizes = {
//   textBase: '1rem',
//   textXl: '1.25rem',
//   text2xl: '1.5rem',
// };

// // Text content data
// export const textContent = [
//   {
//     title: 'My Project',
//     position: { x: -250, y: -200 },
//     fontSize: 'text2xl',
//     color: 'textPrimary',
//   },
//   {
//     content: [
//       'Hi, This section uses a Canvas to display my projects,',
//       'which you can freely move around. Use two fingers to',
//       'zoom in and zoom out.',
//     ],
//     startPosition: { x: -250, y: -150 },
//     lineHeight: 25,
//     fontSize: 'textBase',
//     color: 'textSecondary',
//   },
//   {
//     title: 'SORE. Pixel Crafters',
//     position: { x: 300, y: 600 },
//     fontSize: 'text2xl',
//     color: 'textPrimary',
//     description: [
//       'SORE Pixel Crafters is a digital agency that specializes in UI/UX Design and Web Development.',
//       'Working on the frontend side and specializing in slicing designs into web applications. Worked',
//       'in a team and successfully developed a modern and responsive web application.',
//     ],
//     descriptionStart: { x: 300, y: 650 },
//     lineHeight: 25,
//   },
//   // Add other text sections following the same pattern...
// ];

// // Image data
// export const images = [
//   {
//     id: 'profile',
//     src: './img/profileimage2.jpg',
//     x: -250,
//     y: -75,
//     width: 370,
//     height: 370,
//   },
//   {
//     id: 'sore',
//     src: './img/sorepixelcrafters.png',
//     x: 300,
//     y: 725,
//     width: 683,
//     height: 1252,
//   },
//   {
//     id: 'gamedev',
//     src: './img/gamedev-project.png',
//     x: 1500,
//     y: 475,
//     width: 415,
//     height: 415,
//   },
//   // ... rest of your images
// ];

// // Helper function to draw text
// export function drawText(ctx, text, x, y, fontSize, color) {
//   ctx.fillStyle = tailwindColors[color];
//   ctx.font = `${fontSizes[fontSize]} ${fontFamily}`;
//   ctx.fillText(text, x, y);
// }

// // Helper function to draw multiple lines of text
// export function drawTextBlock(ctx, textBlock) {
//   const {
//     content,
//     startPosition,
//     lineHeight = 25,
//     fontSize = 'textBase',
//     color = 'textSecondary',
//   } = textBlock;

//   content.forEach((line, index) => {
//     const y = startPosition.y + index * lineHeight;
//     drawText(ctx, line, startPosition.x, y, fontSize, color);
//   });
// }
