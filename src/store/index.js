import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: "m1",
                    title: "asd asd as",
                    description: "desc here",
                },
                { id: "m2", title: "string2", description: "desc here2" },
                { id: "m3", title: "string3", description: "desc here3" },
                { id: "m4", title: "string4", description: "desc here4" },
                { id: "m5", title: "string5", description: "desc here5" },
            ],
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            }
        }
    },

});

export default store;
