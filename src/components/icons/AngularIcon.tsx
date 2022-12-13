import { IconProp } from '~/models/icon-prop.model'

export default function AngularIcon(props: IconProp) {
	return (
		<svg role="img" class={props.class} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={'currentColor'}><title>Angular</title><path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z"/></svg>
	)
}
