/*
   ����Э�̣����ǿ�����ɺܶ���Ȥ�����飬Ҳ�����ø���Ȥ�ķ�ʽ������顣�ںܶ�ʱ��������Ҫ��һ��������ɶ�����������ݿ���������Ҵ󲿷�ʱ����Щ����֮�䲢����Լ��ϵ��ͨ��Э�̣����ǿ��Ժܷ���ؽ���Щ����ƽ�з��ͣ��������Ӧ�ٶȡ�
   ���������еĶ�������������ᱻͬʱִ�У�����ȫ����ɺ󣬼�������Ĵ��롣
   */

var coroutine = require("coroutine");

function func(){

	console.log("let's go");

	coroutine.parallel(function(){
		console.log('dang1...');
	}, function(){
		console.log('dang2...');
	}, function(){
		console.log('dang3...');
	}, function(){
		console.log('dang4...');
	});
}

func();

/*
output:
gerryyang@mba:src$fibjs coroutine.js 
let's go
dang1...
dang2...
dang3...
dang4...
 */

