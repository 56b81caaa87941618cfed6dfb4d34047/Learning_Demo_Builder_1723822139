<!--
INSTRUCTION: Summary: The blank component contains the following two parts:
INSTRUCTION: - To the left: There is an empty div with text on top and bottom.
INSTRUCTION: - To the right: There is an empty div.
INSTRUCTION:
INSTRUCTION: If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div>` and then use the following syntax:
INSTRUCTION: <div class="grid">
INSTRUCTION:     <!-- these components appear to the left side -->
INSTRUCTION:     <div id="left-side-container" class="flex"> Left side part here </div>
INSTRUCTION:
INSTRUCTION:     <!-- these components appear to the right side -->
INSTRUCTION:     <div id="right-side-container" class="flex"> Right side part here</div>
INSTRUCTION: </div>
-->
<template>
<section id="blank-section" class="bg-white dark:bg-gray-900 flex-1">

        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <nav class="bg-gray-800 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <div class="text-white text-xl font-bold">Crypto SWAP</div>
                <div class="space-x-4">
                    <a href="#" class="text-white hover:text-gray-300">Home</a>
                    <a href="#" class="text-white hover:text-gray-300">Swap</a>
                    <a href="#" class="text-white hover:text-gray-300">About</a>
                    <a href="#" class="text-white hover:text-gray-300">Contact</a>
                </div>
            </div>
        </nav>

        </section>  

</template>

</template>

<script>
export default {
    name: "BlankComponent",
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
