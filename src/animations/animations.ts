type directionType = 1 | -1

export const createShowTextAnimation = (
  target: string, 
  trigger: string, 
  direction: directionType = 1, 
  options?: object
) => {
  gsap.from(target, {
    scrollTrigger: {
      trigger: trigger,
      start: '20px 60%'
    },
    x: 200 * direction,
    opacity: 0,
    ease: "power4.out",
    duration: 2,
    ...options
    // delay: 0.5
  })
}

export const createBlockAnimation = (
  target: string, 
  trigger: string,
  direction: directionType = 1,
  options?: object
) => {
  gsap.from(target, {
    scrollTrigger: {
      trigger: trigger,
      start: '20px 100%'
    },
    x: 400 * direction,
    ease: "power4.out",
    duration: 1,
    ...options
    // delay: 0.5
  })
}