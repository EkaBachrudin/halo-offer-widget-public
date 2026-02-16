import re

with open('halo-offer-widget/cards-container.html', 'r') as f:
    content = f.read()

# Multi-line case
def replace_multi(m):
    details = m.group(1).replace("'", r'\"')
    terms = m.group(3).replace("'", r'\"')
    spaces = m.group(2)
    return f'data-expandable=\'[\n{spaces}    {{"title":"Detail Paket","content":"{details}"}},\n{spaces}    {{"title":"Syarat & Ketentuan","content":"{terms}"}},\n{spaces}]\'>'

# Single-line case
def replace_single(m):
    details = m.group(1).replace("'", r'\"')
    terms = m.group(2).replace("'", r'\"')
    return f'data-expandable=\'[\n    {{"title":"Detail Paket","content":"{details}"}},\n    {{"title":"Syarat & Ketentuan","content":"{terms}"}},\n]\'>'

content = re.sub(r'data-details="([^"]*)"\s+data-terms="([^"]*)"', replace_single, content)
content = re.sub(r'data-details="([^"]*)"\n(\s+)data-terms="([^"]*)"', replace_multi, content)

with open('halo-offer-widget/cards-container.html', 'w') as f:
    f.write(content)

print("Converted with escaped double quotes!")

# Verify
import json
match = re.search(r"data-expandable='(\[[\s\S]*?\'])'", content)
if match:
    try:
        json.loads(match.group(1))
        print("Status: VALID JSON")
    except json.JSONDecodeError as e:
        print(f"Status: INVALID - {e}")
