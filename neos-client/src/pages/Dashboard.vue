<template>
    <div>
        <div class="container">
            <div class="banner"></div>
            <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role='tablist' aria-orientation="vertical">
                    <a href="#v-pills-add-new" data-bs-toggle="pills" class="nav-link active" role="tab" aria-controls="v-pills-add-new" aria-selected="true">Add New</a>
                    <a href="#v-pills-view-prev" data-bs-toggle="pills" class="nav-link " role="tab" aria-controls="v-pills-view-prev" aria-selected="false">View Previous</a>
                    <a href="#v-pills-add-to" data-bs-toggle="pills" class="nav-link " role="tab" aria-controls="v-pills-add-to" aria-selected="false">Add to Existing</a>
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-add-new" role="tabpanel" aria-labelledby="v-pills-add-new">...</div>
                    <div class="tab-pane fade" id="v-pills-view-prev" role="tabpanel" aria-labelledby="v-pills-view-prev">...</div>
                    <div class="tab-pane fade" id="v-pills-add-to" role="tabpanel" aria-labelledby="v-pills-add-to">...</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .banner{
        color : #006360;
        width: 100%;
        height: 100px;
    }
</style>