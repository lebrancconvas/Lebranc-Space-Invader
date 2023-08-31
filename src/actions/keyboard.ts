export const keys = {
  left: {
    pressed: false
  },
  right: {
    pressed: false
  },
  space: {
    pressed: false
  }
};

export function keyupAction(event: KeyboardEvent) {
  switch(event.code) {
    case 'ArrowLeft':
      keys.left.pressed = false;
      break;
    case 'ArrowRight':
      keys.right.pressed = false;
      break;
    case 'Space':
      keys.space.pressed = false;
      break;
  }
}

export function keydownAction(event: KeyboardEvent) {
  switch(event.code) {
    case 'ArrowLeft':
      keys.left.pressed = true;
      break;
    case 'ArrowRight':
      keys.right.pressed = true;
      break;
    case 'Space':
      keys.space.pressed = true;
      break;
  }
}
