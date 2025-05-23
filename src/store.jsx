import { BehaviorSubject, Subject } from "rxjs";
const currentUser = {};

const userStore = new BehaviorSubject(currentUser);
const updateActiveUser$ = new Subject();

const projectStore = new BehaviorSubject([]);

// ... (actions need to be updated)

export { updateActiveUser$, userStore };
