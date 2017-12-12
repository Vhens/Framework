<template>
	<div class="gt-drag-sort" ref="drag">
      <slot></slot>
    </div>
</template>

<script>
	import { Sortable } from './drag'
	export default {
    name: 'gtDragSort',
		data() {
			return {
			}
		},
		methods: {
			createDrag(){
				const el = this.$refs.drag;
        const sortable = new Sortable(el, {
          sort: true,  // sorting inside list
          delay: 0, // time in milliseconds to define when the sorting should start
          disabled: false, // Disables the sortable if set to true.
          store: null,  // @see Store
          animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
          scroll: true, // or HTMLElement
          scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
          scrollSpeed: 10, // px
          // dragging started
          onStart: function (evt) {
            evt.oldIndex;  // element index within parent
          },
          onEnd: function (/**Event*/evt) {
            evt.oldIndex;  // element's old index within parent
            evt.newIndex;  // element's new index within parent
            // el.css({top: 0});
          }
        });
      }
		},
		mounted() {
			this.createDrag();
		}
	}
</script>
