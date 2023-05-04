import { writable } from 'svelte/store'

// is there a better way to write this
const isSenate = writable(false);

const senatorIndex = writable(0);

const apiData = writable([]);

export {
    senatorIndex, isSenate, apiData
}