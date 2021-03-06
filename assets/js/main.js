require({
	shim: {
		"controllers/workerController": {
			deps: [
				"app",
				"cubism",
				"services/jobsProcessedCounter",
				"services/jobsSuccessCounter",
				"services/jobsFailedCounter",
				"services/workersStartListener",
				"services/workersStopListener",
				"services/workersPauseListener",
				"services/workersResumeListener"
			]
		},
		"controllers/jobController": {
			deps: [
				"app",
				"services/jobsProcessedCounter",
				"services/jobsFailedCounter"
			]
		},
		"controllers/scheduledJobController": {
			deps: ["app", "calheatmap"]
		},
		"controllers/lastestJobGraphController": {
			deps: ["app"]
		},
		"controllers/lastestJobHeatmapController": {
			deps: ["app", "calheatmap"]
		},
		"controllers/pendingJobController": {
			deps: ["app"]
		},
		"controllers/loadOverviewController": {
			deps: ["app", "d3"]
		},
		"controllers/jobClassDistributionController": {
			deps: ["app"]
		},
		"controllers/logActivityController": {
			deps: ["app", "moment", "cookie", "jsrender"]
		},
		"controllers/queueController": {
			deps: [
				"app",
				"services/jobsProcessedCounter",
				"services/workersStartListener",
				"services/workersStopListener"
			]
		},
		"directives/graphHorizonChart": {
			deps: ["app"]
		},
		"directives/graphPie": {
			deps: ["app", "d3"]
		},
		"directives/iconJob": {
			deps: ["app"]
		},
		"directives/placeholder": {
			deps: ["app"]
		},
		"filters/uptime": {
			deps: ["app"]
		},
		"filters/urlencode": {
			deps: ["app"]
		},
		"filters/bspopover": {
			deps: ["app"]
		},
		"libs/angular-resource": {
			deps: ["libs/angular"]
		},
		"services/jobsProcessedCounter": {
			deps: ["app", "services/socket"]
		},
		"services/jobsSuccessCounter": {
			deps: ["app", "services/socket"]
		},
		"services/jobsFailedCounter": {
			deps: ["app", "services/socket"]
		},
		"services/workersStartListener": {
			deps: ["app", "services/socket"]
		},
		"services/workersStopListener": {
			deps: ["app", "services/socket"]
		},
		"services/workersPauseListener": {
			deps: ["app", "services/socket"]
		},
		"services/workersResumeListener": {
			deps: ["app", "services/socket"]
		},
		"app": {
			deps: ["libs/angular", "libs/angular-resource", "ui.bootstrap",
			"jquery", "libs/bootstrapjs", "highlightjs", "infinitescroll"]
		},
		"bootstrap": {
			deps: ["app"]
		},
		"libs/bootstrapjs": {
			deps: ["jquery"]
		},
		"calheatmap": {
			deps: ["d3"]
		},
		"cookie" : {
			deps: ["jquery"]
		},
		"cubism": {
			deps: ["d3"]
		},
		"ui.bootstrap": {
			deps: ["libs/angular"]
		},
		jsrender: {
			deps: ["jquery"]
		},
		infinitescroll: {
			deps: ["jquery"]
		}
	},
	baseUrl: "./js",
	paths: {
		jquery: "libs/jquery-2.0.0.min",
		d3: "libs/d3",
		calheatmap: "libs/cal-heatmap",
		highlightjs: "libs/highlightjs-7.3.min",
		moment:  "libs/moment-2.0.0.min",
		cookie: "libs/jquery.cookie-1.1.min",
		cubism: "libs/cubism.v1.2.2.min",
		jsrender: "libs/jquery.jsrender-1.0.min",
		"ui.bootstrap": "libs/ui-bootstrap-tpls-0.3.0.min",
		infinitescroll: "libs/infinite-scroll-2.0.min"
	}
}, ["require",
	"controllers/workerController", "controllers/jobController", "controllers/lastestJobGraphController",
	"controllers/queueController", "controllers/lastestJobHeatmapController", "controllers/scheduledJobController",
	"controllers/pendingJobController", "controllers/loadOverviewController", "controllers/logActivityController",
	"controllers/jobClassDistributionController",
	"filters/uptime", "filters/urlencode", "filters/bspopover",
	"directives/graphHorizonChart", "directives/graphPie", "directives/iconJob", "directives/placeholder"
	], function(require) {
	return angular.element(document).ready(function() {
		return require(["bootstrap"]);
	});
});
