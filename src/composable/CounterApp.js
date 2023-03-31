import { computed } from "vue";
import { useStore } from "vuex";

const useCounter = () => {
    const store = useStore();
    const mycount = computed(() => store.state.count);

    const increase = () => {
        store.dispatch("IncrementChangeCount")
    };

    const decrease = () => {
        store.dispatch("DecrementChangeCount")
    };

    const reset = () => {
        store.dispatch("Reset")
    };
    //Note: if Reset here bears same name with the Reset in vuex, 
    //it is not going to have any effect on the vuex state when clicked

    const setValue = () => {
        store.dispatch("SetValue")
    };
    

    return { increase, decrease, reset, setValue, mycount};
};

export default useCounter;



















































// import { ref } from "vue";


// export default function CounterApp() {
 
//     const count = ref(0)
//     const message = ref("This is a counter app");
//     const newCount = ref(0)

//     const handleIncrease = () => {
//         console.log("increase count")
//         console.log(count.value)
//         count.value = count.value + 1
//         console.log(count.value)
//     }

//     const handleDecrease = () => {
//         console.log("decrease count")
//         console.log(count.value)
//         count.value = count.value - 1
//         console.log(count.value)
//     }

//     const handleReset = () => {
//         console.log("reset count")
//         count.value = 0
//     }

//     const handleSetValue = () => {
//         console.log("set count")
//         count.value = newCount.value
//         newCount.value = ""
//         console.log(count.value)
//     }

//     return { count, message, newCount, handleIncrease, handleDecrease, handleReset, handleSetValue };

//   }