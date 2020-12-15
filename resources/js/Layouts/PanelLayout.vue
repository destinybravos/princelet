<template>
    <div class="min-h-screen bg-gray-100">
        <!-- side bar -->
        <div id="overlay" class="h-full w-full fixed transition-all overflow-auto" style="display:none;" 
            @click="showingNavigationDropdown = ! showingNavigationDropdown">

        </div>
        <side-bar :open-state="showingNavigationDropdown" />

        <!-- Dashboard Contents -->
        <div id="dashboard_content">
            <!-- Page Heading -->
            <header class="bg-gray-900 shadow text-shadow sticky top-0">
                <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 text-white flex">
                    <slot name="header"></slot>
                    <div class="flex-1 text-right">
                        <div class="inline-flex align-middle items-center mr-4 p-2">
                            <strong>
                                <font-awesome-icon :icon="['far','bell']" style="font-size:1.3rem;" />
                            </strong>
                        </div>
                        <!-- Hamburger -->
                        <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="md:hidden inline-flex mr-2 items-center border justify-center p-1 align-middle rounded text-gray-400 hover:text-gray-500 outline focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script>
import SideBar from "../Components/SideBar";

export default {
    components:{
        SideBar
    },
    data() {
        return {
            showingNavigationDropdown: false,
        }
    },
    watch:{
        'showingNavigationDropdown' : function (params) {
            this.toggleSideBar();
        }
    },
    mounted(){
        
    },
    methods:{
        toggleSideBar(){
            let overlay = document.getElementById('overlay')
            // Styling
            overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
            // toggle opacity
            if(this.showingNavigationDropdown){
               overlay.style.display = 'block';
               overlay.style.opacity = '100%';
            }else{
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 500);
            }
        }
    }
}
</script>

<style>
    #dashboard_content{
        margin-left: 250px;
    }
    @media screen and (max-width: 767px){
        #dashboard_content{
            margin-left: 0;
        }
    }
</style>

<style scoped>

</style>