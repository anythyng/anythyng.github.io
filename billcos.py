import xml.etree.cElementTree as ET

root = ET.Element("root")
doc = ET.SubElement(root, "doc")

ET.SubElement(doc, "name", name="name").text  = "andy"
ET.SubElement(doc, "age", name="age").text = "22"

tree= ET.ElementTree(root)
tree.write("people.xml")
