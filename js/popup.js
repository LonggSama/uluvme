
status="Mr.Linhkool"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ú';
a[3]='n';
a[4]='g';
a[5]=' ';
a[6]='v';
a[7]='ậ';
a[8]='y';
a[9]='!';
a[10]=' ';
a[11]='A';
a[12]='n';
a[13]='h';
a[14]=' ';
a[15]='y';
a[16]='ê';
a[17]='u';
a[18]=' ';
a[19]='e';
a[20]='m';
a[21]=' ';
a[22]='n';
a[23]='h';
a[24]='ấ';
a[25]='t';
a[26]=' ';
a[27]='v';
a[28]='ị';
a[29]='n';
a[30]='h';
a[31]=' ';
a[32]='B';
a[33]='ắ';
a[34]='c';
a[35]=' ';
a[36]='B';
a[37]='ộ';
a[38]=' ';
a[39]='l';
a[40]='u';
a[41]='n';
a[42]='n';
a[43]='n';
a[44]='!';
a[45]='♥';
a[46]='♥';
a[47]='♥';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==48)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2>hihi đừng có chối nữa nhé ! <img src='img/3.gif'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>Em cũng yêu anh nhiều lắm!<img src='img/2.gif'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Dù sau này có như thế nào hãy luôn bên em và yêu em như thế này crush nhé! <img src='img/4.gif'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
								