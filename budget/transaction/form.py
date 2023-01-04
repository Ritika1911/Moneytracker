from django import forms

# creating a form
class InputForm(forms.Form):

	id = forms.IntegerField()
	date = forms.DateTimeField()
	category = forms.CharField(
					help_text = "Enter category"
					)
	password = forms.IntegerField()
