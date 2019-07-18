import Vue from 'vue';
import Skeleton from '../components/Skeleton/skeleton-2';
import Skeletona from '../components/Skeleton/skeleton-1';

export default new Vue({
  components: {
    Skeleton,
		Skeletona,
  },
  template: `
		<div>
				<Skeleton id="ske-ind" style="display:none"></Skeleton>
				<Skeletona id="ske-about" style="display:none"></Skeletona>
		</div>
	`
});


//render: h => h(Skeleton,Skeletona),
// template: `
//         <div>
//             <Skeleton id="ske-ind" style="display:none"></Skeleton>
//             <Skeletona id="ske-about" style="display:none"></Skeletona>
//         </div>
//     `