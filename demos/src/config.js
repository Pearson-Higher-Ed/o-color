module.exports = {
	"options": {
		"sass": "demos/src/demo.scss"
	},
	"demos": [
		{
			"name": "demo",
			"template": "demos/src/demo.mustache",
			"data": {
				"swatches": [
					{
						"palette": "light",
						"label": "Light palette",
						"categories": [
							{
								"category": "fg",
								"label": "Foreground",
								"types": [
									{
										"type": "primary",
										"label": "Primary"
									},
									{
										"type": "secondary",
										"label": "Secondary"
									}
								]
							},
							{
								"category": "bg",
								"label": "Background",
								"types": [
									{
										"type": "primary-light",
										"label": "Primary, light"
									},
									{
										"type": "primary",
										"label": "Primary"
									},
									{
										"type": "primary-dark",
										"label": "Primary, dark"
									},
									{
										"type": "highlight",
										"label": "Highlight"
									}
								]
							},
							{
								"category": "accent",
								"label": "Accent",
								"types": [
									{
										"type": "primary",
										"label": "Primary"
									},
									{
										"type": "secondary",
										"label": "Secondary"
									}
								]
							}
						]
					},
					{
						"palette": "dark",
						"label": "Dark palette",
						"categories": [
							{
								"category": "fg",
								"label": "Foreground",
								"types": [
									{
										"type": "primary",
										"label": "Primary"
									},
									{
										"type": "secondary",
										"label": "Secondary"
									}
								]
							},
							{
								"category": "bg",
								"label": "Background",
								"types": [
									{
										"type": "primary-light",
										"label": "Primary, light"
									},
									{
										"type": "primary",
										"label": "Primary"
									},
									{
										"type": "primary-dark",
										"label": "Primary, dark"
									}
								]
							},
							{
								"category": "accent",
								"label": "Accent",
								"types": [
									{
										"type": "primary",
										"label": "Primary"
									},
									{
										"type": "secondary",
										"label": "Secondary"
									}
								]
							}
						]
					}
				]
			}
		}
	]
};
