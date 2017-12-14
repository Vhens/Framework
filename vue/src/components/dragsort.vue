<template>
  <div class="box1">
    <gt-drag-sort class="drag-list">
      <div class="drag-item" v-for="item in options">
	        <div class="config-title" >
	            <span class="title-span"></span>{{item.name}}
	        </div>
	    </div>
    </gt-drag-sort>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: [{
          id: 1,
          name: '苹果'
        },
        {
          id: 2,
          name: '橘子'
        },
        {
          id: 3,
          name: '香蕉'
        },
        {
          id: 4,
          name: '葡萄'
        }]
      };
    }
  };
</script>

<style lang="scss" scopoed>
.drag-list{
	padding: 10px 10px;
    background: #efefef;
	.drag-item{
		width: 100%;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    background: #ffffff;
    margin-bottom: 15px;
    padding: 20px;
    .config-title{
      color: #2f3857;
      font-weight: 600;
    }
	}
}
</style>

