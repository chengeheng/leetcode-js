const {
	override,
	fixBabelImports,
	addLessLoader,
	babelInclude,
	addWebpackResolve
} = require("customize-cra");
const path = require("path");

module.exports = override(
	// 参考https://www.jianshu.com/p/e1dbb940968d
	fixBabelImports("antd", {
		libraryName: "antd",
		libraryDirectory: "lib"
		// style: true
	}),
	addLessLoader({
		// modifyVars: {
		// 	"@primary-color": "#F5A623"
		// },
		javascriptEnabled: true
	}),
	babelInclude([path.resolve("src")]),
	addWebpackResolve({
		extensions: [".js", ".jsx", ".json", ".css", ".less", ".jpg", ".png"],
		alias: {
			// 配置绝对路径
			style: path.resolve(__dirname, "src/style"),
			images: path.resolve(__dirname, "src/images")
		}
	})
);
