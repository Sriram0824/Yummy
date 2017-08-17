<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="test.aspx.cs" Inherits="yummly.test" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <asp:ScriptManager ID="ScriptManager1" runat="server">
        <Scripts>
            <asp:ScriptReference Path="~/Scripts/jquery-2.1.4.min.js" /> 
            <asp:ScriptReference Path="~/Scripts/yummly.js" />
            <asp:ScriptReference Path="~/Scripts/demo.js" />
        </Scripts>
    </asp:ScriptManager>
        
        <input placeholder="Query" type="text" id="query" name="query" />
        <input type="submit" value="search" />
        <table id="searchResult">
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>image</th>
                    <th>Ingredients</th>
                    <th>time</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    </form>
</body>
</html>
