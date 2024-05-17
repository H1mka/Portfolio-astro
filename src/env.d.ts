/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
import gsap from "gsap";

interface Window { 
  gsap: typeof gsap;
}