var blacklist =[
	{brand:"康師傅", group:"味全"}, 
	{brand:"大絕韻", group:"味全"}, 
	{brand:"大醇豆", group:"味全"}, 
	{brand:"木崗", group:"味全"}, 
	{brand:"自然果力", group:"味全"}, 
	{brand:"每日C", group:"味全"}, 
	{brand:"每日c", group:"味全"}, 
	{brand:"貝納頌", group:"味全"}, 
	{brand:"ABLS", group:"味全"}, 
	{brand:"味全", group:"味全"}, 
	{brand:"醇奶布丁系列", group:"味全"}, 
	{brand:"廚易", group:"味全"}, 
	{brand:"台灣搵醬", group:"味全"}, 
	{brand:"鮮Soup", group:"味全"}, 
	{brand:"原榨", group:"味全"}, 
	{brand:"健康廚房", group:"味全"}, 
	{brand:"涼爽茶", group:"味全"}, 
	{brand:"淬釀", group:"味全"}, 
	{brand:"荷頓", group:"味全"}, 
	{brand:"Apas", group:"味全"}, 
	{brand:"LCA506", group:"味全"}, 
	{brand:"VOSSI", group:"味全"}, 
	{brand:"36法郎", group:"味全"}, 
	{brand:"味小寶", group:"味全"}, 
	{brand:"純品", group:"味全"}, 
	{brand:"Jagabee", group:"味全"}, 
	{brand:"加卡比", group:"味全"}, 
	{brand:"ucc", group:"味全"}, 
	{brand:"UCC", group:"味全"}, 
	{brand:"Ucc", group:"味全"}, 
	{brand:"埔心", group:"味全"}, 
	{brand:"布列德", group:"味全"}, 
	{brand:"林鳳營", group:"味全"}, 
	{brand:"王德傳", group:"味全"}, 
	{brand:"松青", group:"味全"}, 
	{brand:"欣全", group:"味全"}, 
	{brand:"維力", group:"正義"}, 
	{brand:"正義", group:"正義"}, 
	{brand:"寶素齋", group:"正義"}, 
	{brand:"Lactic Butter", group:"正義"}, 
	{brand:"巴特博士", group:"正義"}, 
	{brand:"不二", group:"正義"}, 
	{brand:"不二牧場", group:"正義"}, 
	{brand:"京都優賞", group:"正義"}, 
	{brand:"香香", group:"正義"}, 
	{brand:"富蘭", group:"正義"}, 
	{brand:"INHON", group:"應宏"}, 
	{brand:"INHON", group:"應宏"}, 
	{brand:"Papilio", group:"應宏"}, 
	{brand:"G106Z", group:"應宏"}, 
	{brand:"G100", group:"應宏"}, 
	{brand:"Famorr", group:"應宏"}, 
	{brand:"高士特", group:"應宏"}, 
	{brand:"Gusto", group:"應宏"}, 
	{brand:"台北101", group:"頂新"}, 
	{brand:"臺北101", group:"頂新"}, 
	{brand:"成美", group:"頂新"}, 
	{brand:"德克士", group:"頂新"}, 
	{brand:"Dicos", group:"頂新"}, 
	{brand:"台灣之星", group:"頂新"}, 
	{brand:"臺灣之星", group:"頂新"}, 
	{brand:"威寶", group:"頂新"}, 
	{brand:"台灣之光", group:"頂新"}, 
	{brand:"連勝文", group:"頂新"}, 
	{brand:"馬英九", group:"頂新"}, 
	{brand:"魏應充", group:"頂新"}, 
	{brand:"蔡正元", group:"頂新"}, 
	{brand:"邱毅", group:"頂新"}, 
	{brand:"羅淑蕾", group:"頂新"}, 
];
$(document).ready(function(){
$("a.skip").click(function(event){
	 event.preventDefault();
	 $("div.callhelpbig").empty();
});
});
$("button").click(function()
{
	var searchStuff = $("input").val();
	var test2 = "<h1>『"+searchStuff+"』</h1>";	
	$("div.nopro").empty();
	$("div.nam").empty();
	$("div.group").empty();
	$("div.brand").empty();
	$("div.product").empty();
	$("div.product").append(test2);
	$("div.nopro").append("<p>這不是頂新的商品！<br>不過台灣黑心食物事件每天爆，還是請您要注意。</p>")
	for (var i = blacklist.length - 1; i >= 0; i--) 
	{
		if(searchStuff.indexOf(blacklist[i].brand) >=0)
			{
				$("div.nopro").empty();
				$("div.brand").empty();
				$("div.brand").append("<p>"+blacklist[i].brand+"是個頂新集團的品牌</p>")
				$("p").addClass("red");
			}

		if(searchStuff.indexOf(blacklist[i].group) >=0)
			{
				$("div.nopro").empty();
				$("div.group").empty();
				$("div.group").append("<p>"+blacklist[i].group+"是個頂新集團下的企業</p>")
				$("p").addClass("red");

			}
		if(searchStuff.indexOf("馬英九") >=0)
			{
				$("div.nopro").empty();
				$("div.group").empty();
				$("div.group").append("<p>這種不吉祥的字你也敢搜尋!!</p>")
				$("p").addClass("red");
			}
		if(searchStuff.indexOf("連勝文") >=0)
			{
				$("div.nopro").empty();
				$("div.group").empty();
				$("div.group").append("<p>一直玩一直玩一直玩一直玩一直玩一直玩</p>")
				$("p").addClass("red");
			}
		if(searchStuff.indexOf("蔡正元") >=0)
			{
				$("div.nopro").empty();
				$("div.group").empty();
				$("div.group").append("<p>政治垃圾的名字有什麼好搜尋的，幹！</p>")
				$("p").addClass("red");
			}
		if(searchStuff.indexOf("邱毅") >=0)
			{
				$("div.nopro").empty();
				$("div.group").empty();
				$("div.group").append("<p>政治垃圾的名字有什麼好搜尋的，幹！</p>")
				$("p").addClass("red");
			}
		if(searchStuff.indexOf("羅淑蕾") >=0)
			{
				$("div.nopro").empty();
				$("div.group").empty();
				$("div.group").append("<p>跳針跳針跳針跳針，叫我姐姐！</p>")
				$("p").addClass("red");
			}
		if(searchStuff.indexOf("姚德謙") >=0)
			{
				$("div.nopro").empty();
				$("div.group").empty();
				$("div.group").append("<p>你怎麼會認識這麼帥的帥哥</p>")
				$("p").addClass("red");
			}


	};
	
});

