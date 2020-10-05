(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{571:function(e,t,a){e.exports=a.p+"assets/img/oc-structure.ed7eba0d.png"},661:function(e,t,a){"use strict";a.r(t);var s=a(25),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"opencore-boot-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opencore-boot-issues"}},[e._v("#")]),e._v(" OpenCore Boot Issues")]),e._v(" "),s("ul",[s("li",[e._v("Supported version: 0.6.2")])]),e._v(" "),s("p",[e._v("Issues surrounding from initial booting the USB itself to right before you choose to boot the macOS installer")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#stuck-on-no-vault-provided"}},[e._v("Stuck on "),s("code",[e._v("no vault provided!")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#stuck-on-oc-invalid-vault-mode"}},[e._v("Stuck on "),s("code",[e._v("OC: Invalid Vault mode")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#stuck-on-ocb-ocscanforbootentries-failure-not-found"}},[e._v("Stuck on "),s("code",[e._v("OCB: OcScanForBootEntries failure - Not Found")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#stuck-on-ocb-failed-to-match-a-default-boot-option"}},[e._v("Stuck on "),s("code",[e._v("OCB: failed to match a default boot option")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#stuck-on-ocb-system-has-no-boot-entries"}},[e._v("Stuck on "),s("code",[e._v("OCB: System has no boot entries")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#stuck-on-ocs-no-schema-for-dsdt-kernelandkextpatch-rtvariable-smbios-systemparameters"}},[e._v("Stuck on "),s("code",[e._v("OCS: No schema for DSDT, KernelAndKextPatch, RtVariable, SMBIOS, SystemParameters...")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#stuck-on-oc-driver-xxx-efi-at-0-cannot-be-found"}},[e._v("Stuck on "),s("code",[e._v("OC: Driver XXX.efi at 0 cannot be found")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#receiving-failed-to-parse-real-field-of-type-1"}},[e._v("Receiving "),s("code",[e._v("Failed to parse real field of type 1")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#can-t-select-anything-in-the-picker"}},[e._v("Can't select anything in the picker")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#ssdts-not-being-added"}},[e._v("SSDTs not being added")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#booting-opencore-reboots-to-bios"}},[e._v("Booting OpenCore reboots to BIOS")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#ocabc-incompatible-openruntime-r4-require-r10"}},[e._v("OCABC: Incompatible OpenRuntime r4, require r10")])])]),e._v(" "),s("h2",{attrs:{id:"stuck-on-no-vault-provided"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-no-vault-provided"}},[e._v("#")]),e._v(" Stuck on "),s("code",[e._v("no vault provided!")])]),e._v(" "),s("p",[e._v("Turn off Vaulting in your config.plist under "),s("code",[e._v("Misc -> Security -> Vault")]),e._v(" by setting it to:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Optional")])])]),e._v(" "),s("p",[e._v("If you have already executed the "),s("code",[e._v("sign.command")]),e._v(" you will need to restore the OpenCore.efi file as the 256 byte RSA-2048 signature has been shoved in. Can grab a new copy of OpenCore.efi here: "),s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("strong",[e._v("Note")]),e._v(": Vault and FileVault are 2 separate things, see "),s("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/security.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security and FileVault"),s("OutboundLink")],1),e._v(" for more details")]),e._v(" "),s("h2",{attrs:{id:"stuck-on-oc-invalid-vault-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-oc-invalid-vault-mode"}},[e._v("#")]),e._v(" Stuck on "),s("code",[e._v("OC: Invalid Vault mode")])]),e._v(" "),s("p",[e._v("This is likely a spelling mistake, options in OpenCore are case-sensitive so make sure you check closely, "),s("strong",[e._v("O")]),e._v("ptional is the correct way to enter it under "),s("code",[e._v("Misc -> Security -> Vault")])]),e._v(" "),s("h2",{attrs:{id:"can-t-see-macos-partitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#can-t-see-macos-partitions"}},[e._v("#")]),e._v(" Can't see macOS partitions")]),e._v(" "),s("p",[e._v("Main things to check:")]),e._v(" "),s("ul",[s("li",[e._v("ScanPolicy set to "),s("code",[e._v("0")]),e._v(" to show all drives")]),e._v(" "),s("li",[e._v("Have the proper firmware drivers such as HfsPlus(Note ApfsDriverLoader shouldn't be used in 0.5.8)")]),e._v(" "),s("li",[e._v("Set UnblockFsConnect to True in config.plist -> UEFI -> Quirks. Needed for some HP systems")]),e._v(" "),s("li",[e._v("Set "),s("strong",[e._v("SATA Mode")]),e._v(": "),s("code",[e._v("AHCI")]),e._v(" in BIOS")]),e._v(" "),s("li",[e._v("Set "),s("code",[e._v("UEFI -> APFS")]),e._v(" to see APFS based drives:\n"),s("ul",[s("li",[s("strong",[e._v("EnableJumpstart")]),e._v(": YES")]),e._v(" "),s("li",[s("strong",[e._v("HideVerbose")]),e._v(": NO")]),e._v(" "),s("li",[e._v("If running older versions of High Sierra(ie. 10.13.5 or older), set the following:\n"),s("ul",[s("li",[s("strong",[e._v("MinDate")]),e._v(": "),s("code",[e._v("-1")])]),e._v(" "),s("li",[s("strong",[e._v("MinVersion")]),e._v(": "),s("code",[e._v("-1")])])])])])])]),e._v(" "),s("h2",{attrs:{id:"stuck-on-ocb-ocscanforbootentries-failure-not-found"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-ocb-ocscanforbootentries-failure-not-found"}},[e._v("#")]),e._v(" Stuck on "),s("code",[e._v("OCB: OcScanForBootEntries failure - Not Found")])]),e._v(" "),s("p",[e._v("This is due to OpenCore being unable to find any drives with the current ScanPolicy, setting to "),s("code",[e._v("0")]),e._v(" will allow all boot options to be shown")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Misc -> Security -> ScanPolicy -> 0")])])]),e._v(" "),s("h2",{attrs:{id:"stuck-on-ocb-failed-to-match-a-default-boot-option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-ocb-failed-to-match-a-default-boot-option"}},[e._v("#")]),e._v(" Stuck on "),s("code",[e._v("OCB: failed to match a default boot option")])]),e._v(" "),s("p",[e._v("Same fix as "),s("code",[e._v("OCB: OcScanForBootEntries failure - Not Found")]),e._v(", OpenCore is unable to find any drives with the current ScanPolicy, setting to "),s("code",[e._v("0")]),e._v(" will allow all boot options to be shown")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Misc -> Security -> ScanPolicy -> 0")])])]),e._v(" "),s("h2",{attrs:{id:"stuck-on-ocb-system-has-no-boot-entries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-ocb-system-has-no-boot-entries"}},[e._v("#")]),e._v(" Stuck on "),s("code",[e._v("OCB: System has no boot entries")])]),e._v(" "),s("p",[e._v("Same fix as the above 2:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Misc -> Security -> ScanPolicy -> 0")])])]),e._v(" "),s("h2",{attrs:{id:"stuck-on-ocs-no-schema-for-dsdt-kernelandkextpatch-rtvariable-smbios-systemparameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-ocs-no-schema-for-dsdt-kernelandkextpatch-rtvariable-smbios-systemparameters"}},[e._v("#")]),e._v(" Stuck on "),s("code",[e._v("OCS: No schema for DSDT, KernelAndKextPatch, RtVariable, SMBIOS, SystemParameters...")])]),e._v(" "),s("p",[e._v("This is due to either using a Clover config with OpenCore or using a configurator such as Mackie's Clover and OpenCore configurator. You'll need to start over and make a new config or figure out all the garbage you need to remove from your config. "),s("strong",[e._v("This is why we don't support configurators, they are known for these issues")])]),e._v(" "),s("ul",[s("li",[e._v("Note: These same issues will also occur if you mix outdated configs with newer versions of OpenCore. Please update them accordingly")])]),e._v(" "),s("h2",{attrs:{id:"stuck-on-oc-driver-xxx-efi-at-0-cannot-be-found"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-oc-driver-xxx-efi-at-0-cannot-be-found"}},[e._v("#")]),e._v(" Stuck on "),s("code",[e._v("OC: Driver XXX.efi at 0 cannot be found")])]),e._v(" "),s("p",[e._v("This is due to an entry being in your config.plist, however not present in your EFI. To resolve:")]),e._v(" "),s("ul",[s("li",[e._v("Ensure your EFI/OC/Drivers matches up with your config.plist -> UEFI -> Drivers\n"),s("ul",[s("li",[e._v("If not, please run Cmd/Ctrl+R with OpenCore to re-snapshot your config.plist")])])])]),e._v(" "),s("p",[e._v("Note that the entries are case-sensitive.")]),e._v(" "),s("h2",{attrs:{id:"receiving-failed-to-parse-real-field-of-type-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receiving-failed-to-parse-real-field-of-type-1"}},[e._v("#")]),e._v(' Receiving "Failed to parse real field of type 1"')]),e._v(" "),s("p",[e._v("This is due to a value set as "),s("code",[e._v("real")]),e._v(" when it's not supposed to be, generally being that Xcode converted "),s("code",[e._v("HaltLevel")]),e._v(" by accident:")]),e._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("HaltLevel"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("real")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("2147483648"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("real")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),s("p",[e._v("To fix, swap "),s("code",[e._v("real")]),e._v(" for "),s("code",[e._v("integer")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("HaltLevel"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("2147483648"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),s("h2",{attrs:{id:"can-t-select-anything-in-the-picker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#can-t-select-anything-in-the-picker"}},[e._v("#")]),e._v(" Can't select anything in the picker")]),e._v(" "),s("p",[e._v("This is due to either a few things")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Incompatible keyboard driver:")]),e._v(" "),s("ul",[s("li",[e._v("Disable "),s("code",[e._v("PollAppleHotKeys")]),e._v(" and enable "),s("code",[e._v("KeySupport")]),e._v(", then remove "),s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenUsbKbDxe"),s("OutboundLink")],1),e._v(" from your config.plist -> UEFI -> Drivers")]),e._v(" "),s("li",[e._v("If the above doesn't work, reverse: disable "),s("code",[e._v("KeySupport")]),e._v(", then add "),s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenUsbKbDxe"),s("OutboundLink")],1),e._v(" to your config.plist -> UEFI -> Drivers")])])]),e._v(" "),s("li",[s("p",[e._v("Missing PS2 keyboard driver(Ignore if using a USB keyboard):")]),e._v(" "),s("ul",[s("li",[e._v("While most firmwares will include it by default, some laptops and older PCs may still need "),s("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ps2KeyboardDxe.efi"),s("OutboundLink")],1),e._v(" to function correctly. Remember to add this to your config.plist as well")])])])]),e._v(" "),s("h2",{attrs:{id:"ssdts-not-being-added"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssdts-not-being-added"}},[e._v("#")]),e._v(" SSDTs not being added")]),e._v(" "),s("p",[e._v("So with OpenCore, there's some extra security checks added around ACPI files, specifically that table length header must equal to the file size. This is actually the fault of iASL when you compiled the file. Example of how to find it:")]),e._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" Original Table Header"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("     Signature        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"SSDT"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("     Length           "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("x0000015D")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("349")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("     Revision         "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x02")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("     Checksum         "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0xCF")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("     OEM ID           "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ACDT"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("     OEM Table ID     "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"SsdtEC"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("     OEM Revision     "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("x00001000")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("     Compiler ID      "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"INTL"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("     Compiler Version "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("x20190509")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("538510601")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("The "),s("code",[e._v("Length")]),e._v(" and "),s("code",[e._v("checksum")]),e._v(" value is what we care about, so if our SSDT is actually 347 bytes then we want to change "),s("code",[e._v("Length")]),e._v(" to "),s("code",[e._v("0x0000015B (347)")]),e._v("(the "),s("code",[e._v("015B")]),e._v(" is in HEX)")]),e._v(" "),s("p",[e._v("Best way to actually fix this is to grab a newer copy of iASL or Acidanthera's copy of "),s("a",{attrs:{href:"https://github.com/acidanthera/MaciASL/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("MaciASL"),s("OutboundLink")],1),e._v(" and remaking the SSDT")]),e._v(" "),s("ul",[s("li",[e._v("Note: MaciASL distributed by Rehabman are prone to ACPI corruption, please avoid it as they no longer maintain their repos")])]),e._v(" "),s("h2",{attrs:{id:"booting-opencore-reboots-to-bios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#booting-opencore-reboots-to-bios"}},[e._v("#")]),e._v(" Booting OpenCore reboots to BIOS")]),e._v(" "),s("ul",[s("li",[e._v("Incorrect EFI folder structure, make sure all of your OC files are within an EFI folder located on your ESP(EFI system partition)")])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Example of folder structure")]),e._v(" "),s("p",[s("img",{attrs:{src:a(571),alt:"Directory Structure from OpenCore's DOC"}})])]),e._v(" "),s("h2",{attrs:{id:"ocabc-incompatible-openruntime-r4-require-r10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ocabc-incompatible-openruntime-r4-require-r10"}},[e._v("#")]),e._v(" OCABC: Incompatible OpenRuntime r4, require r10")]),e._v(" "),s("p",[e._v("Outdated OpenRuntime.efi, make sure BOOTx64.efi, OpenCore.efi and OpenRuntime are "),s("strong",[e._v("all from the same exact build")]),e._v(". Anything mismatched will break booting")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Note")]),e._v(": FwRuntimeServices has been renamed to OpenRuntime with 0.5.7 and newer")])])])}),[],!1,null,null,null);t.default=o.exports}}]);