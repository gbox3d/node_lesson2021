<template >
    <div>
        <h1>Memo</h1>
        <button @click="updateList" >update</button>
        <ul> 
            <li v-for="(item,index) in memoList" :key="index" >
                <h1>{{item.title}}</h1>
                <h3>{{item.text}}</h3>
            </li>

        </ul>
        
    </div>
</template>
<script>
export default {
    name : "Memo",
    computed : {
        memoList() {
            return this.$store.state.memoList
        }

    },
    methods : {
        updateList() {
            this.$store.dispatch('updateMemoList')
        }
    },
    created() {
        console.log('created')
        this.$store.dispatch('updateMemoList')
    }
}
</script>
<style >
    
</style>