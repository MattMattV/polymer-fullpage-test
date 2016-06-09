/**
 * Created by mvion on 05/01/16.
 */

function clickHandler(e)
{
    var button = e.target;
    while (!button.hasAttribute('data-dialog') && button !== document.body)
    {
        button = button.parentElement;
    }

    if (!button.hasAttribute('data-dialog'))
    {
        return;
    }

    var id = button.getAttribute('data-dialog');
    var dialog = document.getElementById(id);
    if (dialog) {
        dialog.open();
    }
}

function toggleCollapse(selector)
{
    document.getElementById(selector).toggle();
}