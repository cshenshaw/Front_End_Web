function toTextfile()
{
var fso = new ActiveXObject("Scripting.FileSystemObject");
var s = fso.CreateTextFile("C\website\NewFile.txt", true);
var text=document.getElementById("TextArea1").innerText;
s.WriteLine(text);
s.WriteLine('***********************');
s.Close();
}

